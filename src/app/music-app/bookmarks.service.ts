import { Injectable, ViewEncapsulation } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { Album } from './music-search/interfaces'
import { Bookmark, NewBookmark } from './bookmarks/interfaces';

const URL: string = 'http://localhost:3000/bookmarks/'

@Injectable()
export class BookmarksService {

    private bookmarks: Bookmark[] = []
    private bookmarks$: Subject<Bookmark[]> = new Subject<Bookmark[]>()

    constructor(private http: Http) {
        this.fetchBookmarks()
        // this.bookmarks = JSON.parse(localStorage.getItem('bookmarks') || "[]")
        // this.bookmarks$.subscribe(bookmarks => {
        //     localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
        // })
    }

    addBookmark(album: Album): void {
        if (this.bookmarks.some(b => b.albumId == album.id)) {
            return
        }

        let bookmark: NewBookmark = {
            name: album.name,
            albumId: album.id
        }
        console.log('adding', bookmark)
        this.saveBookmark(bookmark).subscribe((savedBookmark: Bookmark) => {
            this.setBookmarks(this.bookmarks.concat(savedBookmark))
        })
    }

    private saveBookmark(bookmark: NewBookmark): Observable<Bookmark> {
        let options = new RequestOptions({
            headers: new Headers({
                'ContentType': 'application/json',
                'X-Auth-Token': 'jakistamtoken'
            })
        })
        return this.http.post(URL, bookmark, options)
            .map(response => response.json())
    }

    fetchBookmarks(): void {
        this.http.get(URL).subscribe((response: Response) => {
            this.setBookmarks(response.json())
        })
    }

    getBookmarks(): Observable<Bookmark[]> {
        return Observable.from(this.bookmarks$)
            .startWith(this.bookmarks)
    }

    deleteBookmark(bookmark: Bookmark): void {
        console.log('deleting', bookmark)
        this.http.delete(URL + bookmark.id).subscribe((response => {
            this.setBookmarks(this.bookmarks.filter(existingBookmark => {
                return existingBookmark.id != bookmark.id
            }))
        }))
    }

    private setBookmarks(bookmarks: Bookmark[]): void {
        this.bookmarks = bookmarks;
        this.bookmarks$.next(this.bookmarks)
    }

    getBookmark(id: number): Observable<Bookmark> {
        return this.http.get(URL + id).map(response => response.json());
    }

}

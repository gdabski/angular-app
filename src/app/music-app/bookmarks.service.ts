import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { Bookmark } from './bookmarks/interfaces';

@Injectable()
export class BookmarksService {

    private bookmarks: Bookmark[]
    private bookmarks$: Subject<Bookmark[]> = new Subject<Bookmark[]>()

    constructor() {
        this.bookmarks = JSON.parse(localStorage.getItem('bookmarks') || "[]")
        this.bookmarks$.subscribe(bookmarks => {
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
        })
    }

    addBookmark(bookmark: Bookmark): void {
        console.log('adding', bookmark)
        this.bookmarks = this.bookmarks.concat(bookmark)
        this.bookmarks$.next(this.bookmarks)
    }

    getBookmarks(): Observable<Bookmark[]> {
        return Observable.from(this.bookmarks$)
            .startWith(this.bookmarks)
    }

}

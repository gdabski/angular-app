import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Album } from './music-search/interfaces';
import { Observable, Subject } from 'rxjs'

@Injectable()
export class MusicService {

    private searches$: Subject<string> = new Subject<string>();
    private albums$: Subject<Album[]> = new Subject<Album[]>();

    queryCache: string = "Pink Floyd"
    albumsCache: Album[] = []

    constructor(private http: Http) {
        this.albumsCache = JSON.parse(localStorage.getItem('albums') || '[]')
        this.queryCache = JSON.parse(localStorage.getItem('query') || '""')

        this.searches$
        .map(query => {
            localStorage.setItem("query", JSON.stringify(query))
            return `https://api.spotify.com/v1/search?q=${query}&type=album`
        })
        .flatMap(url => {
            return this.http.get(url)
        })
        .map((response: Response) => {
            return response.json().albums.items
        })
        .subscribe(albums => {
            localStorage.setItem("albums", JSON.stringify(albums))
            this.albumsCache = albums
            console.log('newItems', albums)
            this.albums$.next(albums)
        })
    }

    search(query: string) {
        this.searches$.next(query)
    }

    getAlbums(): Observable<Album[]> {
        return Observable.from(this.albums$)
            .do(a => console.log(a))
            .startWith(this.albumsCache)
    }

}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Album } from './music-search/interfaces';
import {Observable, Subject } from 'rxjs'


@Injectable()
export class MusicService {

    private searches$: Subject<string> = new Subject<string>();
    private albums$: Subject<Album[]> = new Subject<Album[]>();

    defaultQuery: string = "Pink Floyd"

    constructor(private http: Http) {
        this.searches$
        .startWith(this.defaultQuery)
        .map(query => (
            `https://api.spotify.com/v1/search?q=${query}&type=album`
        ))
        .flatMap(url => this.http.get(url))
        .map((response: Response) => {
            return response.json().albums.items
        })
        .subscribe(albums => {
            this.albums$.next(albums)
        })
    }

    search(query: string) {
        this.searches$.next(query)
    }

    getAlbums(): Observable<Album[]> {
        return this.albums$
    }

}

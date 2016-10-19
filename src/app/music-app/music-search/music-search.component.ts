import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Album, Image } from './interfaces';
import { Http, Response } from '@angular/http';
import { MusicService } from '../music.service';
import {Observable } from 'rxjs'

@Component({
    selector: 'music-search',
    templateUrl: './music-search.component.html',
    styles: []
})
export class MusicSearchComponent {

    // private albums: Album[] = [
    //     {id:"123", name:"Fake Album A", images:[
    //         {url:"http://placehold.it/300x300", width: 300, height: 300}
    //     ]},
    //     {id:"124", name:"Fake Album B", images:[
    //         {url:"http://placehold.it/300x300", width: 300, height: 300}
    //     ]},
    //     {id:"125", name:"Fake Album C", images:[
    //         {url:"http://placehold.it/300x300", width: 300, height: 300}
    //     ]},
    //     {id:"126", name:"Fake Album D", images:[
    //         {url:"http://placehold.it/300x300", width: 300, height: 300}
    //     ]},
    // ]

    albums$: Observable<Album[]> = new Observable<Album[]>()

    constructor(private musicService: MusicService) {
        this.albums$ = this.musicService.getAlbums()
    }
}

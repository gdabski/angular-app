import { Component, OnInit } from '@angular/core';
import { Album, Image } from './interfaces';
import { Http, Response } from '@angular/http'

@Component({
  selector: 'music-search',
  templateUrl: './music-search.component.html',
  styles: []
})
export class MusicSearchComponent {

    albums: Album[] = [
//        {id:"123", name:"Fake Album A", images:[
//            {url:"http://placehold.it/300x300", width: 300, height: 300}
//        ]},
//        {id:"124", name:"Fake Album B", images:[
//            {url:"http://placehold.it/300x300", width: 300, height: 300}
//        ]},
//        {id:"125", name:"Fake Album C", images:[
//            {url:"http://placehold.it/300x300", width: 300, height: 300}
//        ]},
//        {id:"126", name:"Fake Album D", images:[
//            {url:"http://placehold.it/300x300", width: 300, height: 300}
//        ]},
    ]

    constructor(private http: Http) {
        let query = 'Pink%20Floyd'
        let url = `https://api.spotify.com/v1/search?q=${query}&type=album`
        this.http.get(url).subscribe((response: Response) => {
            this.albums = response.json().albums.items
        })
    }

}

import { Component, OnInit, Input } from '@angular/core';
import { Album, Image } from './interfaces';

@Component({
  selector: 'album-list',
  templateUrl: './album-list.component.html',
  styles: []
})
export class AlbumListComponent {

    @Input() albums: Album[]

    constructor() {
    }

}

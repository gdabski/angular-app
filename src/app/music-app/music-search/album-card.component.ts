import { Component, Input } from '@angular/core';
import { Album, Image } from './interfaces';
import { ResponseType } from '@angular/http';

@Component({
  selector: 'album-card',
  templateUrl: './album-card.component.html',
  styles: []
})
export class AlbumCardComponent {

    album: Album
    image: Image

    @Input('album') set setAlbum(album: Album) {
        this.album = album
        this.image = album.images[0]
    }

}

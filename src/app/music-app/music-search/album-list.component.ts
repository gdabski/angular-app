import { Component, Input, OnInit } from '@angular/core';
import { Album, Image } from './interfaces';
import { Observable } from 'rxjs';
import { BookmarksService } from '../bookmarks.service';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'album-list',
  templateUrl: './album-list.component.html',
  styles: []
})
export class AlbumListComponent {

    @Input() albums: Observable<Album[]>

    constructor(private bookmarksService: BookmarksService) {}

    bookmarkAlbum(album: Album): void {
        this.bookmarksService.addBookmark(album)
    }

}

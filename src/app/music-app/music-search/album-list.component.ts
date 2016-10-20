import { Component, Input, OnInit } from '@angular/core';
import { Album, Image } from './interfaces';
import { Observable } from 'rxjs';
import { BookmarksService } from '../bookmarks.service';
import { PlatformLocation } from '@angular/common';

@Component({
    selector: 'album-list',
    templateUrl: './album-list.component.html',
    styles: [`.column {
        transition-property: width;
        transition-timing-function: ease-in;
        transition-duration: 1s
    }`]
})
export class AlbumListComponent {

    @Input() albums: Observable<Album[]>
    @Input() cardWidth: number = 4

    constructor(private bookmarksService: BookmarksService) { }

    bookmarkAlbum(album: Album): void {
        this.bookmarksService.addBookmark(album)
    }

}

import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../bookmarks.service';
import { Bookmark } from './interfaces';
import { Observable } from 'rxjs'

@Component({
  selector: 'bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styles: []
})
export class BookmarksListComponent {

    bookmarks$: Observable<Bookmark[]>

    constructor(bookmarksService: BookmarksService) {
        this.bookmarks$ = bookmarksService.getBookmarks()
    }

}

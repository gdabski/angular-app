import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from './interfaces';
import { BookmarksService } from '../bookmarks.service';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styles: []
})
export class BookmarkComponent {

    constructor(private bookmarksService: BookmarksService) {}

    @Input() bookmark: Bookmark

    deleteBookmark() {
        this.bookmarksService.deleteBookmark(this.bookmark)
    }

}

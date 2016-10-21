import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookmarksService } from '../bookmarks.service';
import { Bookmark } from './interfaces';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'bookmark-details',
    templateUrl: './bookmark-details.component.html',
    styles: []
})

export class BookmarkDetailsComponent {

    bookmark: Bookmark

    constructor(private route: ActivatedRoute, private bookmarksService: BookmarksService) {
        route.params.subscribe(params => {
            let id: number = parseInt(params['id'])
            if (id) {
                bookmarksService.getBookmark(id).subscribe(bookmark => {
                    this.bookmark = bookmark
                })
            }
        })
    }

    onSave(): void {
        this.bookmarksService.saveBookmark(this.bookmark)
            .subscribe(bookmark => {
                this.bookmark = bookmark
            })
    }

}

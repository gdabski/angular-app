import { NgModule } from '@angular/core';
import { CommonModule, PlatformLocation } from '@angular/common';
import { MusicSearchComponent } from './music-search/music-search.component';
import { AlbumSearchComponent } from './music-search/album-search.component';
import { AlbumListComponent } from './music-search/album-list.component';
import { AlbumCardComponent } from './music-search/album-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MusicService } from './music.service';
import { BookmarksService } from './bookmarks.service';
import { BookmarkComponent } from './bookmarks/bookmark.component';
import { BookmarksListComponent } from './bookmarks/bookmarks-list.component';
import { ShortenPipe } from './shorten.pipe';
import { RoutingModule } from './music.routing';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BookmarkDetailsComponent } from './bookmarks/bookmark-details.component';
import { StartsWithLetterDirective } from './starts-with-letter.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RoutingModule
    ],
    exports: [
        MusicSearchComponent
    ],
    declarations: [
        MusicSearchComponent,
        AlbumSearchComponent,
        AlbumListComponent,
        AlbumCardComponent,
        BookmarkComponent,
        BookmarksListComponent,
        ShortenPipe,
        BookmarksComponent,
        BookmarkDetailsComponent,
        StartsWithLetterDirective
    ],
    providers: [
        MusicService,
        BookmarksService
    ]
})
export class MusicAppModule { }

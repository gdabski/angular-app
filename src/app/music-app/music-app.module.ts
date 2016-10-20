import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search/music-search.component';
import { AlbumSearchComponent } from './music-search/album-search.component';
import { AlbumListComponent } from './music-search/album-list.component';
import { AlbumCardComponent } from './music-search/album-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MusicService } from './music.service';
import { BookmarksService } from './bookmarks.service';
import { BookmarkComponent } from './bookmarks/bookmark.component';
import { BookmarksListComponent } from './bookmarks/bookmarks-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
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
        BookmarksListComponent
    ],
    providers: [
        MusicService,
        BookmarksService
    ]
})
export class MusicAppModule { }

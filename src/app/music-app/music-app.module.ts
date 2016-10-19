import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicSearchComponent } from './music-search/music-search.component';
import { AlbumSearchComponent } from './music-search/album-search.component';
import { AlbumListComponent } from './music-search/album-list.component';
import { AlbumCardComponent } from './music-search/album-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
      MusicSearchComponent
  ],
  declarations: [MusicSearchComponent, AlbumSearchComponent, AlbumSearchComponent, AlbumListComponent, AlbumCardComponent]
})
export class MusicAppModule { }

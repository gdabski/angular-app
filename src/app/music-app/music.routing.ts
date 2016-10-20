import { RouterModule, Routes, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MusicSearchComponent } from './music-search/music-search.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { BookmarkDetailsComponent } from './bookmarks/bookmark-details.component';

const routes: Routes = [
    {path:'music', component: MusicSearchComponent},
    {path:'bookmarks', component: BookmarksComponent, children: [
        {path: '', component: BookmarkDetailsComponent},
        {path: ':id', component: BookmarkDetailsComponent},
        {path: '**', redirectTo: 'details'}
    ]}
]

export const RoutingModule: ModuleWithProviders = RouterModule.forChild(routes)

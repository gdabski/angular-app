import { RouterModule, Routes, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { MusicSearchComponent } from './music-app/music-search/music-search.component';

const routes: Routes = [
    {path:'todos', component: TodoAppComponent},
    {path:'music', component: MusicSearchComponent},
    {path:'', redirectTo:'music', pathMatch:'full'},
    {path: '**', redirectTo: 'music'}
]

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {
    // useHash: true
})

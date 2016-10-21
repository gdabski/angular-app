import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MusicAppModule } from './music-app/music-app.module';
import { RoutingModule } from './routing';

import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoListComponent } from './todo-app/todo-list.component';
import { TodoItemComponent } from './todo-app/todo-item.component';
import { TodoFormComponent } from './todo-app/todo-form.component';
import { MusicSearchComponent } from './music-app/music-search/music-search.component';
import { UnlessDirective } from './unless.directive';
import { HighlightDirective } from './highlight.directive';
import { LifeCycleComponent } from './life-cycle.component';

import { NavComponent } from './nav/nav.component';
import { TestingComponent } from './testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
    UnlessDirective,
    HighlightDirective,
    LifeCycleComponent,
    NavComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MusicAppModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

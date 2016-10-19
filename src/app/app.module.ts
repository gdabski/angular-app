import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MusicAppModule } from './music-app/music-app.module';

import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoListComponent } from './todo-app/todo-list.component';
import { TodoItemComponent } from './todo-app/todo-item.component';
import { TodoFormComponent } from './todo-app/todo-form.component';
import { UnlessDirective } from './unless.directive';
import { HighlightDirective } from './highlight.directive';
import { LifeCycleComponent } from './life-cycle.component';
import { PlatformLocation } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
    UnlessDirective,
    HighlightDirective,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MusicAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

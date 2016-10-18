import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoListComponent } from './todo-app/todo-list.component';
import { TodoItemComponent } from './todo-app/todo-item.component';
import { TodoFormComponent } from './todo-app/todo-form.component';
import { UnlessDirective } from './unless.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
    UnlessDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

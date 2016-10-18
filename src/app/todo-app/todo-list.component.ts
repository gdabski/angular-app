import { Component, OnInit, Input, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { TodoItemComponent } from './todo-item.component'
import { Todo } from './interfaces'

@Component({
  selector: 'todo-list',
  template: `
    <header>
      <ng-content select='.listheader'></ng-content>
      <input type="color" [(ngModel)]="color">
    </header>
    <ul>
      <li *ngFor="let todo of todos" highlight [highlightColor]='color'> 
        <todo-item [todo]="todo" (completed)="onCompleted($event)"></todo-item>
      </li>
    </ul>
    <footer>
      <ng-content select='.listfooter'></ng-content>
    </footer>
  `,
  styles: []
})
export class TodoListComponent implements AfterViewInit {

  color: string= "#FF2222"
  
  @ViewChildren(TodoItemComponent) viewItems:QueryList<TodoListComponent>

  @Input('data')
  todos:Todo[] = []

  add(todo:Todo) {
    this.todos.push(todo)
  }

  onCompleted(todo:Todo) {
    console.log(todo);
  }

  constructor() {

  }

  ngAfterViewInit() {
    this.viewItems.changes.forEach(currentList => {
      console.log(currentList.toArray())
    })
  }

}

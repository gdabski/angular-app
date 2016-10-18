import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './interfaces'

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos"> 
        <todo-item [todo]="todo" (completed)="onCompleted($event)"></todo-item>
      </li>
    </ul>
  `,
  styles: []
})
export class TodoListComponent implements OnInit {

  @Input('data')
  todos:Todo[] = [ ]

  add(todo:Todo){
    this.todos.push(todo)
  }

  onCompleted(todo:Todo){
    console.log(todo);
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TodoListComponent } from './todo-list.component'
import { Todo } from './interfaces';

@Component({
  selector: 'todo-app',
  template: `
  <button (click)="show = !show">ups..</button>
    <todo-list [data]="todos" *ngIf="show"></todo-list>
    <todo-form (created)="add($event) "></todo-form>
  `,
  //encapsulation: ViewEncapsulation.Native,
  styles: []
})
export class TodoAppComponent implements OnInit {

  @ViewChild(TodoListComponent) list:TodoListComponent;

  todos:Todo[] = [
    {name: 'Todo A', completed: false},
    {name: 'Next Todo', completed: true},
    {name: 'Last Todo', completed: false},
  ]

  constructor() { }
  
  add(todo){
    this.list.add(todo)
  }
  ngOnInit() {
    console.log(this.list)
  }

}

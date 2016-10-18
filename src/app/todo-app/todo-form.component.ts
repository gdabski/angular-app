import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from './interfaces'

@Component({
  selector: 'todo-form',
  template: `
    <input type="text" [(ngModel)]="todo.name" > 
    <input type="button" value="Dodaj" (click)="addTodo()" >
  `,
  styles: []
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  @Output('created')
  events = new EventEmitter()

  todo:Todo = {
    name: '',
    completed: false,
  }

  addTodo(name:string){
    this.events.emit(this.todo)
  }

  ngOnInit() {
  }

}

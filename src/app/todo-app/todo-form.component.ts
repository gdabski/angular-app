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
    let copy = Object.assign({}, this.todo);
    this.todo.name = ""
    this.events.emit(copy)
  }

  ngOnInit() {
  }

}

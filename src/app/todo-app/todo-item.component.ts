import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './interfaces'

@Component({
  selector: 'todo-item',
  template: `
    <p>
    {{data.name}} <input type="checkbox" [(ngModel)]="data.completed" 
      (ngModelChange)="completeToggled()"  />    
    </p>
  `,
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input('todo') set setData(data:Todo){
    this.data = Object.assign({}, data);
  }
  
  data:Todo;

  @Output('completed')
  completedChange:EventEmitter<Todo> = new EventEmitter<Todo>();

  completeToggled(){
    this.completedChange.emit( <Todo> this.data )
  }

  constructor() { }

  ngOnInit() {
  }

}

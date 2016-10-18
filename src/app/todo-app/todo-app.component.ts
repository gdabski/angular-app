import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from './todo-list.component'
import { Todo } from './interfaces';

@Component({
  selector: 'todo-app',
  template: `
  <button (click)="shown = todos">Todos</button>
  <button (click)="shown = archived">Archived</button>
  <div *ngIf="shown === todos">
    <todo-list [data]="todos">
      <div class="listheader"><b>Todo items:</b></div>
      <div class="listfooter">Zakończonych zadań: {{completedTodos}}.</div>
    </todo-list>
    <button (click)=archiveCompleted()>Archiwizuj</button>
    <todo-form (created)="add($event) "></todo-form>
  </div>
  <todo-list [data]="archived" *ngIf="shown === archived">
    <div class="listheader"><b>Archived items:</b></div>
    <div class="listfooter">All finished here.</div>
  </todo-list>
  `,
  //encapsulation: ViewEncapsulation.Native,
  styles: []
})
export class TodoAppComponent implements OnInit {

  todos:Todo[] = [
    {name: 'Todo A', completed: false},
    {name: 'Next Todo', completed: true},
    {name: 'Last Todo', completed: false},
  ]
  archived:Todo[] = []
  shown:Todo[] = this.todos

  constructor() { }
  
  add(todo:Todo) {
    this.todos.push(todo)
  }

  archiveCompleted() {
    let groups = this.todos.reduce((groups: {[key:string]: Todo[]}, todo: Todo) => {
      todo.completed ? groups['archived'].push(todo) : groups['todos'].push(todo)
      return groups;
    }, {archived: [], todos: []} )
    this.todos = groups['todos']
    this.archived = this.archived.concat(groups['archived'])
    this.shown = this.todos
  }

  get completedTodos():number {
    return this.todos.filter(todo => todo.completed).length
  }
  
  ngOnInit() {
  }

}

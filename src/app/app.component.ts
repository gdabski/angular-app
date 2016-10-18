import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html'
  template: `<h1>  Witam! {{title}} </h1>
    <p> App Component </p>
    <todo-app></todo-app>
  `,
  styles: ['h1{ color: red}']
})
export class AppComponent {
  title = 'Angular seems to be working.. even!';

  // <p> Count is: {{counter}} </p>
  counter:number = 0;

  constructor(){

    // setInterval(()=>{
    //   this.counter = 5;
    // },1000)

  }
}

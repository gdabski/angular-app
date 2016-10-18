import { Component, ViewEncapsulation } from '@angular/core';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: ['h1{ color: red}']
})

export class AppComponent {
    title = 'Angular seems to be working.. even!';

    counter: number = 0;

    constructor() {}
}

import { Component, ViewEncapsulation } from '@angular/core';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: ['h3{ color: orange}']
})

export class AppComponent {
    title = 'Angular seems to be working.. even!';

    counter: number = 0

    constructor() {
    }
}

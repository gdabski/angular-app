import { Component } from '@angular/core';

@Component({
    selector: 'testing-comp',
    template: `
        <p>{{title}}</p>
        <button (click)="getBananas()">Get Bananas</button>
    `,
    styles: []
})
export class TestingComponent {

    title: string = 'Batman'
    bananas: string

    addNumbers(x: number, y: number): number {
        return x + y
    }

}

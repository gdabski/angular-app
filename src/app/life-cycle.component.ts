import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';

@Component({
    selector: 'life-cycle',
    template: `
    Hi there!
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: []
})
export class LifeCycleComponent implements OnInit {

    @Input() test = 'awesome'

    constructor() { }

    ngOnInit() {
        console.log('ngOnInit', arguments)
    }
    ngOnChanges() {
        console.log('ngOnChanges', arguments)
    }
    ngDoCheck() {
        console.log('ngDoCheck', arguments)
    }
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked', arguments)
    }
    ngAfterContentInit() {
        console.log('ngAfterContentInit', arguments)
    }
    ngAfterViewChecked() {
        console.log('ngAfterViewChecked', arguments)
    }
    ngAfterViewInit() {
        console.log('ngAfterViewInit', arguments)
    }
    ngOnDestroy() {
        console.log('ngOnDestroy', arguments)
    }

}

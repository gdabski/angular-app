import { Directive, HostBinding, HostListener } from '@angular/core';
import { startsWithLetter } from './music-search/validators';
import { NG_VALIDATORS, NgControl, Validators } from '@angular/forms';

@Directive({
    selector: '[starts-with-letter]',
    providers: [
        {provide: NG_VALIDATORS, useValue: startsWithLetter, multi: true}
    ]
})
export class StartsWithLetterDirective {}

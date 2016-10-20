import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

    transform(value: string, length: number = 20): string {
        let shorter: string = value.substr(0, length)
        return shorter.length < value.length ? shorter + '...' : shorter
    }

}

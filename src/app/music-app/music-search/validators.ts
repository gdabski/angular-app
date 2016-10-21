import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs'

interface objectparams {[key: string]: any}

export function startsWithLetter(control: AbstractControl): {[key: string]: any} {
    const matcher = /^[a-zA-Z]/
    if (matcher.test(control.value)) {
        return {}
    } else {
        return {'startsWithLetter': true}
    }
}

export function noBatman(control: AbstractControl): Promise<objectparams> {

    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000)
    }).then(() => {
        return control.value === 'Batman' ? {
            'noBatman': true
        } : {}
    })
}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlatformLocation } from '@angular/common';
import { MusicService } from '../music.service';
import { startsWithLetter, noBatman } from './validators';

@Component({
    selector: 'album-search',
    templateUrl: './album-search.component.html',
    styles: []
})

export class AlbumSearchComponent {

    searchForm: FormGroup

    constructor(private musicService: MusicService) {
        this.searchForm = new FormGroup({
            "query": new FormControl(musicService.queryCache, [
                Validators.required,
                Validators.minLength(3),
                startsWithLetter
            ], [
                noBatman
            ])
        })

        this.searchForm.get('query').valueChanges
            .filter(query => query.length > 3)
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(value => {
                this.musicService.search(value)
            })

        this.searchForm.get('query').statusChanges.subscribe(status => {
            console.log(status, this.searchForm.get('query').pending,
                    this.searchForm.get('query').errors)
        })
    }

    onSearch() { }

}

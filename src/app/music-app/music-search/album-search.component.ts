import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlatformLocation } from '@angular/common';
import { MusicService } from '../music.service';

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
            ])
        })

        this.searchForm.get('query').valueChanges
            .filter(query => query.length > 3)
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(value => {
                this.musicService.search(value)
            })
    }

    onSearch() {

    }

}

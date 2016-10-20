import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from './interfaces';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styles: ['div {direction: rtl; unicode-bidi: bidi-override;}']
})
export class BookmarkComponent {

    @Input() bookmark: Bookmark

}

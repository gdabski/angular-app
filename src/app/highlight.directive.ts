import { Directive, Input, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  active: boolean = false;
  color: string

  @HostBinding('style.background') get getColor() {
  return this.active ? this.color : ''
  }

  @Input('highlightColor') set setColor(color: string) {
    this.color = color ? color : 'red'
  }

  @HostListener('mouseenter') activate() {
    //this.el.nativeElement.style.background = this.color
    this.active = true
  }


  @HostListener('mouseleave') deactivate() {
    // this.el.nativeElement.style.background = 'inherit'
    this.active = false
  }

  constructor(private el: ElementRef) {
  }

}

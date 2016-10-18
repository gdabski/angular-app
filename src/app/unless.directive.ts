import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  constructor(private tr: TemplateRef<any>, private vc: ViewContainerRef) {
    
  }

  @Input('unless') set onChange(value:boolean) {
    if (value) {
      if (!this.vc.length) {
        this.vc.createEmbeddedView(this.tr)
      }
    } else {
      this.vc.clear()
    }
  }

}

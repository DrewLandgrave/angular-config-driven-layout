import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[advtechMainColumn]'
})
export class MainColumnDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { MatExpansionModule } from '@angular/material';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [PanelComponent],
  entryComponents: [PanelComponent],
  exports: [PanelComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
  ]
})
export class PanelModule {
  constructor(injector: Injector){
    const PanelElement = createCustomElement(PanelComponent, { injector });

    customElements.define('advtech-panel', PanelElement);
  }
}

import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatInputModule } from '@angular/material';
import { AdvtechTextInputComponent } from './advtech-text-input.component';

@NgModule({
  declarations: [AdvtechTextInputComponent],
  entryComponents: [AdvtechTextInputComponent],
  exports: [AdvtechTextInputComponent],
  imports: [
    CommonModule,
    MatInputModule
  ]
})
export class AdvtechTextInputModule {
  constructor(injector: Injector){
    const TextInputElement = createCustomElement(AdvtechTextInputComponent, { injector });

    customElements.define('advtech-text-input', TextInputElement);
  }
 }

import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvtechTextareaInputComponent } from './advtech-textarea-input.component';
import { AdvtechTextInputModule } from '../advtech-text-input/advtech-text-input.module';
import { MatInputModule } from '@angular/material';
import { createCustomElement } from '@angular/elements';



@NgModule({
  declarations: [AdvtechTextareaInputComponent],
  entryComponents: [AdvtechTextareaInputComponent],
  exports: [AdvtechTextareaInputComponent],
  imports: [
    CommonModule,
    MatInputModule
  ]
})
export class AdvtechTextareaInputModule {
  constructor(injector: Injector){
    const TextareaInputElement = createCustomElement(AdvtechTextareaInputComponent, { injector });

    customElements.define('advtech-textarea-input', TextareaInputElement);
  }
 }

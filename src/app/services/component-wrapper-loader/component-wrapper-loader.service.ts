import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { WrapperComponent } from '../..//components/wrapper/wrapper.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentWrapperLoaderService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  loadComponent(viewContainerRef: ViewContainerRef, config: any): WrapperComponent {
      const factory = this.componentFactoryResolver.resolveComponentFactory(WrapperComponent);
      const componentRef = viewContainerRef.createComponent(factory);
      const instance: WrapperComponent = componentRef.instance;

      return instance;
  }
}

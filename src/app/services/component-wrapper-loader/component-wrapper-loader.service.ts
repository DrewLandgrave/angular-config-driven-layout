import {Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentRef} from '@angular/core';
import { WrapperComponent } from '../../components/wrapper/wrapper.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentWrapperLoaderService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  loadComponent(viewContainerRef: ViewContainerRef): ComponentRef<WrapperComponent> {
      const factory = this.componentFactoryResolver.resolveComponentFactory(WrapperComponent);
      return viewContainerRef.createComponent(factory);
  }
}

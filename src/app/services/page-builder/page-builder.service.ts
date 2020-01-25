import { ComponentWrapperLoaderService } from "../component-wrapper-loader/component-wrapper-loader.service";
import { WrapperComponent } from '../../components/wrapper/wrapper.component';
import { ViewContainerRef, Injectable, ComponentRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class PageBuilderService {
    wrapperRegistry: { [key: string]: ComponentRef<WrapperComponent> } = {};

    constructor(private componentWrapperLoaderService: ComponentWrapperLoaderService) { }

    buildColumn(column: any, viewContainerRef: ViewContainerRef) {
        column.forEach(config => {
            const panel = this.componentWrapperLoaderService.loadComponent(viewContainerRef);
            panel.instance.createElement(config);
            config.children.forEach(childConfig => {
                const wrapperComponentComponentRef: ComponentRef<WrapperComponent> =
                    this.componentWrapperLoaderService.loadComponent(panel.instance.insertionPoint);
                wrapperComponentComponentRef.instance.createElement(childConfig);
                this.wrapperRegistry[childConfig.formName] = wrapperComponentComponentRef;
                (panel.instance.element as any).insertChild(wrapperComponentComponentRef.hostView);
                const domElement = document.createElement(childConfig.tag);
                domElement.label = childConfig.label;
            });
        });
    }
}

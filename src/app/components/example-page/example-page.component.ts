import {AfterViewInit, Component, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';
import { EnvConfigService } from '../../services/env-config/env-config.service';
import { ComponentWrapperLoaderService } from '../../services/component-wrapper-loader/component-wrapper-loader.service';
import {WrapperComponent} from '../wrapper/wrapper.component';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent implements AfterViewInit {
  config: any;
  wrapperRegistry: { [key: string]: ComponentRef<WrapperComponent> } = {};

  @ViewChild('mainColumn', {read: ViewContainerRef, static: false})
    mainColumn: ViewContainerRef;

    constructor(
      private envConfigService: EnvConfigService,
      private componentWrapperLoaderService: ComponentWrapperLoaderService) {
  }

  ngAfterViewInit(): void {
    this.config = this.envConfigService.getConfig();
    this.buildPage();
}

  private buildPage() {
    this.config.mainColumn.forEach(config => {
      const panel = this.componentWrapperLoaderService.loadComponent(this.mainColumn);
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

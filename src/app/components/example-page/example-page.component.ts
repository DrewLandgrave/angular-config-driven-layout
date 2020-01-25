import { AfterViewInit, Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { EnvConfigService } from '../../services/env-config/env-config.service';
import { ComponentWrapperLoaderService } from '../../services/component-wrapper-loader/component-wrapper-loader.service';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { PageBuilderService } from '../../services/page-builder/page-builder.service';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.scss']
})
export class ExamplePageComponent implements AfterViewInit {
  config: any;

  @ViewChild('mainColumn', { read: ViewContainerRef, static: false })
  mainColumn: ViewContainerRef;

  viewContainerRefRegistry: {[key: string]: ViewContainerRef} = {};

  constructor(
    private envConfigService: EnvConfigService,
    private pageBuilderService: PageBuilderService) {
  }

  ngAfterViewInit(): void {
    this.config = this.envConfigService.getConfig();
    this.viewContainerRefRegistry['mainColumn'] = this.mainColumn;
    this.buildPage();
  }

  private buildPage() {
    Object.keys(this.config.columns).forEach(key => {
      this.pageBuilderService.buildColumns(this.config.columns[key], this.viewContainerRefRegistry[key]);
    });
  }

}

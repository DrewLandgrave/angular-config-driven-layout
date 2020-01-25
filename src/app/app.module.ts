import { HttpClientModule } from '@angular/common/http';
import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvtechTextInputModule } from './components/advtech-text-input/advtech-text-input.module';
import { ExamplePageComponent } from './components/example-page/example-page.component';
import { PanelModule } from './components/panel/panel.module';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { AdvtechTextareaInputModule } from './components/advtech-textarea-input/advtech-textarea-input.module';
import { MainColumnDirective } from './directives/main-column/main-column.directive';
import { EnvConfigService } from './services/env-config/env-config.service';
import { ComponentWrapperLoaderService } from './services/component-wrapper-loader/component-wrapper-loader.service';


const appRoutes: Routes = [
 {path: '', component: ExamplePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ExamplePageComponent,
    WrapperComponent,
    MainColumnDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    PanelModule,
    AdvtechTextInputModule,
    AdvtechTextareaInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

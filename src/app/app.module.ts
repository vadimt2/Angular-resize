import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TestComponent } from './test.component';
import { IfViewportSizeDirective } from './view-port/if-viewport-size.directive';
import { ViewPortService } from './view-port/view-port.service';
import { config } from './config';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TestComponent, IfViewportSizeDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ViewPortService, {provide: APP_INITIALIZER,
      useFactory: initializeApp,
      multi: true,
      deps: [ViewPortService]}]
})

export class AppModule { }

export function initializeApp(viewPortService:ViewPortService){
  return () => viewPortService.onLoad(config);
}
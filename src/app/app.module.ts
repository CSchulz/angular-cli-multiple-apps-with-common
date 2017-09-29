import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonComponent} from './common.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
  ],
  exports: [
    CommonComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

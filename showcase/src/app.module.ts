import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonsModule} from '../../src/index';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
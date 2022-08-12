import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainContentWrapperModule} from "./shared/main-content-wrapper/main-content-wrapper.module";

@NgModule({
  declarations: [
    AppComponent
  ],
              imports: [
                  BrowserModule,
                  AppRoutingModule,
                  MainContentWrapperModule
              ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

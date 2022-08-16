import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {MainContentWrapperModule} from "../shared/main-content-wrapper/main-content-wrapper.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
            imports: [
              CommonModule,
              HomeRoutingModule,
              MainContentWrapperModule
            ]
          })
export class HomeModule { }

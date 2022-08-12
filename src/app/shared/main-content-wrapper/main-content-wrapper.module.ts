import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainContentWrapperComponent} from './main-content-wrapper.component';


@NgModule({
              declarations: [
                  MainContentWrapperComponent
              ],
              exports: [
                  MainContentWrapperComponent
              ],
              imports: [
                  CommonModule
              ]
          })
export class MainContentWrapperModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PersonalProjectsRoutingModule} from './personal-projects-routing.module';
import {PersonalProjectsComponent} from './personal-projects.component';
import {MainContentWrapperModule} from "../shared/main-content-wrapper/main-content-wrapper.module";


@NgModule({
  declarations: [
    PersonalProjectsComponent
  ],
              imports: [
                  CommonModule,
                  PersonalProjectsRoutingModule,
                  MainContentWrapperModule
              ]
          })
export class PersonalProjectsModule { }

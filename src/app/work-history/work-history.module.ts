import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WorkHistoryRoutingModule} from './work-history-routing.module';
import {WorkHistoryComponent} from './work-history.component';
import {MainContentWrapperModule} from "../shared/main-content-wrapper/main-content-wrapper.module";
import { JobDetailsComponent } from './job-details/job-details.component';


@NgModule({
  declarations: [
    WorkHistoryComponent,
    JobDetailsComponent
  ],
            imports: [
              CommonModule,
              WorkHistoryRoutingModule,
              MainContentWrapperModule
            ]
          })
export class WorkHistoryModule { }

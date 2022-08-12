import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkHistoryComponent } from './work-history.component';

const routes: Routes = [{ path: '', component: WorkHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkHistoryRoutingModule { }

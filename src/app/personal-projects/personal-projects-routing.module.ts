import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalProjectsComponent } from './personal-projects.component';

const routes: Routes = [{ path: '', component: PersonalProjectsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalProjectsRoutingModule { }

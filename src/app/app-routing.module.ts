import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{ path: '', pathMatch: 'full', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'work-history', loadChildren: () => import('./work-history/work-history.module').then(m => m.WorkHistoryModule) }, { path: 'personal-projects', loadChildren: () => import('./personal-projects/personal-projects.module').then(m => m.PersonalProjectsModule) }, { path: 'about-me', loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

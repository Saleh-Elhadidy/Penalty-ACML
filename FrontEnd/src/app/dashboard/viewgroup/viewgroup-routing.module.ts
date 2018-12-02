import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewGroupComponent } from './viewgroup.component';

const routes: Routes = [
  { path: '', component:ViewGroupComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewGroupRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      },
      {
        path: 'items',
        loadChildren: './items/items.module#ItemsModule'
      },
      {
        path: 'groups',
        loadChildren: './groups/groups.module#GroupsModule'
      },
      {
        path: 'viewgroup',
        loadChildren: './viewgroup/viewgroup.module#ViewGroupModule'
      },
      {
        path: 'create',
        loadChildren: './create/create.module#CreateModule'
      },
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule {}

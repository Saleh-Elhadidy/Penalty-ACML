import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'

import { GroupsRoutingModule } from './groups-routing.module';
import {FormsModule} from '@angular/forms'
import { GroupsComponent } from './groups.component';

@NgModule({
  imports: [GroupsRoutingModule,FormsModule,CommonModule],
  declarations: [GroupsComponent],
  providers: []
})
export class GroupsModule {}

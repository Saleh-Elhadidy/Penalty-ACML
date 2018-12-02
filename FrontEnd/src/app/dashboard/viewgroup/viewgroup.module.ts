import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'

import { ViewGroupRoutingModule } from './viewgroup-routing.module';
import {FormsModule} from '@angular/forms'
import { ViewGroupComponent } from './viewgroup.component';

@NgModule({
  imports: [ViewGroupRoutingModule,FormsModule,CommonModule],
  declarations: [ViewGroupComponent],
  providers: []
})
export class ViewGroupModule {}

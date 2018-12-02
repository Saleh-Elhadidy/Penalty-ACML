import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'

import { ItemsRoutingModule } from './items-routing.module';
import {FormsModule} from '@angular/forms'
import { ItemsComponent } from './items.component';

@NgModule({
  imports: [ItemsRoutingModule,FormsModule,CommonModule],
  declarations: [ItemsComponent],
  providers: []
})
export class ItemsModule {}

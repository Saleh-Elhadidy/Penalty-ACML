import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'

import { CreateRoutingModule } from './create-routing.module';
import {FormsModule} from '@angular/forms'
import { CreateComponent } from './create.component';

@NgModule({
  imports: [CreateRoutingModule,FormsModule,CommonModule],
  declarations: [CreateComponent],
  providers: []
})
export class CreateModule {}



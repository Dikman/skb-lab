import { NgModule } from '@angular/core';
import { FormModule } from 'src/app/shared/material/form.module';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    FormModule,
    ListRoutingModule
  ]
})
export class ListModule { }

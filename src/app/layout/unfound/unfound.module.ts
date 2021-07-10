import { NgModule } from '@angular/core';
import { BasicModule } from 'src/app/shared/material/basic.module';
import { UnfoundRoutingModule } from './unfound-routing.module';
import { UnfoundComponent } from './unfound.component';

@NgModule({
  declarations: [
    UnfoundComponent,
  ],
  imports: [
    BasicModule,
    UnfoundRoutingModule,
  ]
})
export class UnfoundModule { }

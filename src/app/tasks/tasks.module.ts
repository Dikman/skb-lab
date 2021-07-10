import { NgModule } from '@angular/core';
import { FormModule } from 'src/app/shared/material/form.module';
import { DialogComponent } from './dialog/dialog.component';
import { ListComponent } from './list/list.component';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [
    ListComponent,
    DialogComponent,
  ],
  imports: [
    FormModule,
    TasksRoutingModule,
  ]
})
export class TasksModule { }

import { NgModule } from '@angular/core';
import { FormModule } from 'src/app/shared/material/form.module';
import { DialogComponent } from './dialog/dialog.component';
import { ListComponent } from './list/list.component';
import { DialogService } from './services/dialog.service';
import { TasksService } from './services/tasks.service';
import { TasksRoutingModule } from './tasks-routing.module';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    ListComponent,
    DialogComponent,
    ViewComponent,
  ],
  imports: [
    FormModule,
    TasksRoutingModule,
  ],
  providers: [
    TasksService,
    DialogService,
  ]
})
export class TasksModule { }

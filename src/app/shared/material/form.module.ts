import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { BasicModule } from './basic.module';

@NgModule({
  exports: [
    BasicModule,
    ReactiveFormsModule,
    DragDropModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatMenuModule,
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter },
  ]
})
export class FormModule { }

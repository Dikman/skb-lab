import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DialogComponent } from '../dialog/dialog.component';
import { TaskData } from './tasks.service';

@Injectable()
export class DialogService {

  constructor(
    private dialog: MatDialog,
  ) { }

  public open(task: TaskData | null = null): Observable<TaskData> {
    return this.dialog
      .open(DialogComponent, {
        role: 'dialog',
        width: '640px',
        data: task,
      })
      .afterClosed()
      .pipe(filter(result => !!result))
  }

}

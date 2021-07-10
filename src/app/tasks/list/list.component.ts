import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { TaskData, TasksService } from '../services/tasks.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public dateFormat = $localize`:@@formats.date:dd.MM.yy, hh:mm`;

  public list$ = this.tasksService.list$();

  constructor(
    private tasksService: TasksService,
    public dialog: MatDialog,
  ) { }

  public trackTask(idx: number, item: TaskData): number {
    return item.id;
  }

  public addNewTask(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      role: 'dialog',
      width: '640px',
      // data?: D | null;
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { TaskData, TasksService } from '../services/tasks.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

  public list$ = this.tasksService.list$();

  public selected: TaskData | undefined;

  constructor(
    private tasksService: TasksService,
    public dialog: MatDialog,
  ) { }

  public trackTask(idx: number, item: TaskData): number {
    return item.id;
  }

  public addNewTask(): void {
    this.editTask(null);
  }

  public editTask(task: TaskData | null): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      role: 'dialog',
      width: '640px',
      data: task,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tasksService.append(result);
        this.selected = result;
      }
    });
  }

}

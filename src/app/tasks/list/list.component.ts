import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '../services/dialog.service';
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
    private dialogService: DialogService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  public trackTask(idx: number, item: TaskData): number {
    return item.id;
  }

  public addNewTask(): void {
    this.dialogService.open().subscribe(result => {
      this.tasksService.append(result);
      this.selected = result;
      this.router.navigate([result.id], { relativeTo: this.activatedRoute });
    });
  }

}

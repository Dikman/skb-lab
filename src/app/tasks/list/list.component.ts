import { Component } from '@angular/core';
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
  ) { }

  public trackTask(idx: number, item: TaskData): number {
    return item.id;
  }

}

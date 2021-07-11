import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, switchMap } from 'rxjs/operators';
import { DialogService } from '../services/dialog.service';
import { TaskData, TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex-spacer' },
})
export class ViewComponent implements OnInit {

  public task$: Observable<TaskData | null> = of(null);

  constructor(
    private activatedRoute: ActivatedRoute,
    private tasksService: TasksService,
    private dialogService: DialogService,
  ) { }

  public ngOnInit(): void {
    this.task$ = this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.tasksService.get$(parseInt(id, 10)))
    );
  }

  public editTask(): void {
    this.task$.pipe(first()).subscribe(task => {
      this.dialogService.open(task).subscribe(result => {
        this.tasksService.append(result);
      });
    });
  }

  public switchStatus(closed: boolean): void {
    this.task$.pipe(first()).subscribe(task => {
      this.tasksService.append({ ...task!, closed });
    });
  }

}

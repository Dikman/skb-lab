import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
  ) { }

  ngOnInit(): void {
    this.task$ = this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.tasksService.get$(parseInt(id, 10)))
    );
  }

}

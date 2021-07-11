import { Inject, Injectable, OnDestroy } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LOCAL_STORAGE } from 'src/app/shared/injection/local-storage/local-storage';
import { WINDOW } from 'src/app/shared/injection/window/window';

const STORAGE_NAME = 'TASK_TRACKING';

export interface TaskData {
  id: number;
  title: string;
  description: string;
  deadline: Moment;
  closed: boolean;
}

@Injectable()
export class TasksService implements OnDestroy {

  private change$ = new BehaviorSubject<TaskData[]>(this.getStoredTasks());

  constructor(
    @Inject(WINDOW) private window: Window,
    @Inject(LOCAL_STORAGE) private localStorage: Storage,
  ) {
    this.window.addEventListener('storage', this.storageChanged);
  }

  public ngOnDestroy(): void {
    this.window.removeEventListener('storage', this.storageChanged);
  }

  public list$(): Observable<TaskData[]> {
    return this.change$.pipe(
      map(list => [...list].reverse()),
    );
  }

  public get$(id: number): Observable<TaskData | null> {
    return this.change$.pipe(
      map(list => list.find(item => item.id === id)),
      map(item => item ? { ...item } : null)
    );
  }

  public append(task: TaskData): void {
    const list = [...this.change$.getValue()];
    const idx = list.findIndex(item => item.id === task.id);

    if (idx === -1) {
      task.id = Math.max(...Object.values(list.map(item => item.id)));
      task.id = task.id === - Infinity ? 0 : task.id + 1;
      list.push(task);
    } else {
      list[idx] = task;
    }

    this.setStoredTasks(list);
  }

  public delete(id: number): void {
    const list = [...this.change$.getValue()];
    const idx = list.findIndex(item => item.id === id);

    if (idx >= 0) {
      list.splice(idx, 1);
      this.setStoredTasks(list);
    }
  }

  private getStoredTasks(raw: string | null = null): TaskData[] {
    try {
      const value = JSON.parse(raw || this.localStorage.getItem(STORAGE_NAME) || '');
      return Array.isArray(value) ? value.map(item => ({ ...item, deadline: moment(item.deadline) })) : [];
    } catch {
      return [];
    }
  }

  private setStoredTasks(list: TaskData[]): void {
    this.localStorage.setItem(STORAGE_NAME, JSON.stringify(list));
    this.change$.next(list);
  }

  private storageChanged = (event: StorageEvent): void => {
    if (event.key === STORAGE_NAME) {
      this.change$.next(this.getStoredTasks(event.newValue));
    }
  }

}

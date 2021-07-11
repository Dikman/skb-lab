import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { TaskData } from '../services/tasks.service';

@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {

  public readonly maxTitleLength = 120;

  public readonly maxDescriptionLength = 1024;

  public readonly minAvailableDate = moment().startOf('day');

  public readonly form: FormGroup;

  public readonly editing: boolean;

  constructor(
    builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: TaskData,
    private dialogRef: MatDialogRef<DialogComponent>,
  ) {
    this.editing = !!data;
    data = data || {};

    this.form = builder.group({
      id: data.id ?? null,
      title: [data.title ?? '', [Validators.required, Validators.maxLength(this.maxTitleLength)]],
      description: [data.description ?? '', [Validators.required, Validators.maxLength(this.maxDescriptionLength)]],
      deadline: [data.deadline ?? moment().startOf('day').add(1, 'day'), [Validators.required, this.checkDate]],
      closed: !!data.closed,
    })
  }

  public checkDate = (control: AbstractControl): ValidationErrors | null => {
    return control.value?.isBefore(this.minAvailableDate) ? { future: true } : null;
  }

  public submit(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

}

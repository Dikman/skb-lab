import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  public readonly maxTitleLength = 120;

  public readonly maxDescriptionLength = 1024;

  public readonly minAvailableDate = moment().startOf('day');

  public readonly form = this.builder.group({
    id: null,
    title: ['', [Validators.required, Validators.maxLength(this.maxTitleLength)]],
    description: ['', [Validators.required, Validators.maxLength(this.maxDescriptionLength)]],
    deadline: [moment().startOf('day').add(1, 'day'), [Validators.required, this.checkDate.bind(this)]],
    closed: false,
  });

  constructor(
    private builder: FormBuilder,
  ) { }

  public submit(): void {

  }

  public checkDate(control: AbstractControl): ValidationErrors | null {
    return control.value?.isBefore(this.minAvailableDate) ? { future: true } : null;
  }

}

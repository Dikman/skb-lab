import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
  ]
})
export class BasicModule { }

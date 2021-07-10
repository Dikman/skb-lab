import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './layout/root/root.component';
import { BasicModule } from './shared/material/basic.module';

@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BasicModule,
  ],
  bootstrap: [
    RootComponent,
  ],
})
export class AppModule { }

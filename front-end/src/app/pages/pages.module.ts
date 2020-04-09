import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BlankComponent } from './blank/blank.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    BlankComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ]
})
export class PagesModule { }

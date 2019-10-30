import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ApiErrorComponent } from './messages/api-error/api-error.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    SpinnerComponent,
    DataTableComponent,
    ApiErrorComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    SpinnerComponent,
    DataTableComponent,
    ApiErrorComponent,
    NgbModule
],
  providers: []
})
export class SharedModule { }



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ApiErrorComponent } from './messages/api-error/api-error.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    ApiErrorComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    SpinnerComponent,
    ApiErrorComponent,
    NgbModule,
    DataTableComponent
  ],
  providers: []
})
export class SharedModule { }



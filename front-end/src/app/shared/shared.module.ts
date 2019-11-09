import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ApiErrorComponent } from './messages/api-error/api-error.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DataTableComponent } from './data-table/data-table.component';
import {RouterModule} from '@angular/router';
import { ToasterComponent } from './toaster/toaster.component';
import { DeactivateModalComponent } from './deactivate-modal/deactivate-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    SpinnerComponent,
    ApiErrorComponent,
    DataTableComponent,
    ToasterComponent,
    DeactivateModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  exports: [
    SpinnerComponent,
    ApiErrorComponent,
    NgbModule,
    DataTableComponent,
    ToasterComponent,
    DeactivateModalComponent
  ],
  providers: []
})
export class SharedModule { }



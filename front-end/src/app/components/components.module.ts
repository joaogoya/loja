import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DataTableComponent } from './data-table/wrapper/data-table.component';
import { DeskComponent } from './data-table/desk/desk.component';
import { MobileComponent } from './data-table/mobile/mobile.component';
import { ToasterComponent } from './toaster/toaster.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ErrorGuardsComponent } from './error-guards/error-guards.component';
import { DeactivateModalComponent } from './deactivate-modal/deactivate-modal.component';

@NgModule({
  declarations: [
    DataTableComponent,
    ToasterComponent,
    DeleteModalComponent,
    ErrorGuardsComponent,
    DeskComponent,
    MobileComponent,
    DeactivateModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  exports: [
    NgbModule,
    DataTableComponent,
    ToasterComponent
  ],
  providers: []
})
export class SharedModule { }

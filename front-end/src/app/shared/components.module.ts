import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';
import { BlankComponent } from './blank/blank.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DataTableComponent } from '../components/data-table/wrapper/data-table.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { ToasterComponent } from '../components/toaster/toaster.component';
import { DeleteModalComponent } from '../components/delete-modal/delete-modal.component';
import { ErrorGuardsComponent } from '../components/error-guards/error-guards.component';
import { DeskComponent } from '../components/data-table/desk/desk.component';
import { MobileComponent } from '../components/data-table/mobile/mobile.component';
import { DeactivateModalComponent } from '../components/deactivate-modal/deactivate-modal.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    DataTableComponent,
    ToasterComponent,
    DeleteModalComponent,
    ErrorGuardsComponent,
    DeskComponent,
    MobileComponent,
    DeactivateModalComponent,
    HomeComponent,
    BlankComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  exports: [
    SpinnerComponent,
    NgbModule,
    DataTableComponent,
    ToasterComponent
  ],
  providers: []
})
export class SharedModule { }

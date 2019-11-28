import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientsRoutingModule } from './clients.routing';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SingleClientResolver } from 'src/app/guards/resolvers/clients/sigleClientResolver.guard';

@NgModule({
  declarations: [
    ClientsListComponent,
    ClientsFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    ClientsRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [SingleClientResolver]
})
export class ClientssModule { }

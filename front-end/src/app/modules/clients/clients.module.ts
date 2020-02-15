import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../components/shared.module';
import { ClientsRoutingModule } from './clients.routing';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SingleClientResolver } from './../../guards/resolvers/clients/single-client-resolver.guard';
import { ClientCanDeactivate } from './../../guards/deactivates/clients/client-deactivate.guard';

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
  providers: [SingleClientResolver, ClientCanDeactivate]
})
export class ClientssModule { }

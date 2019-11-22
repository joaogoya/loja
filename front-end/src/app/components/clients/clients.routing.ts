import { ClientResolver } from 'src/app/guards/resolvers/clients/client-resolver.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';

const ClientsRoutes: Routes = [
    { path: '', component: ClientsListComponent },
    { path: 'form', component: ClientsFormComponent },
    {
      path: 'form/:id',
      component: ClientsFormComponent,
      resolve: {client: ClientResolver}
    }
];

@NgModule({
  imports: [RouterModule.forChild(ClientsRoutes)],
  exports: [RouterModule]
})

export class ClientsRoutingModule {}

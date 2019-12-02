import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { SingleClientResolver } from 'src/app/guards/resolvers/clients/single-client-resolver.guard';
import { AllClientsResolver } from 'src/app/guards/resolvers/clients/all-clients-resolver.guard';
import { ClientCanDeactivate } from 'src/app/guards/deactivates/clients/client-deactivate.guard';

const ClientsRoutes: Routes = [
    { path: '', component: ClientsListComponent },

    {
      path: 'list',
      component: ClientsListComponent,
      resolve: {products: AllClientsResolver},
      runGuardsAndResolvers: 'always'
    },

    {
      path: 'form',
      component: ClientsFormComponent,
      canDeactivate: [ClientCanDeactivate]
    },

    {
      path: 'form/:id',
      component: ClientsFormComponent,
      resolve: {client: SingleClientResolver},
      canDeactivate: [ClientCanDeactivate]
    }
];

@NgModule({
  imports: [RouterModule.forChild(ClientsRoutes)],
  exports: [RouterModule]
})

export class ClientsRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'products',
    loadChildren: () => import('./components/products/products.module').then(e => e.ProducsModule)
  },

  {path: 'clients',
    loadChildren: () => import('./components/clients/clients.module').then(e => e.ClientssModule)
  },

  {path: 'sales',
    loadChildren: () => import('./components/sales/sales.module').then(e => e.SalesModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

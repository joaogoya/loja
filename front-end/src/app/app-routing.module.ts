import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './components/sales/sales.component';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';

const routes: Routes = [
  {path: 'sales', component: SalesComponent},
  {path: 'clients', component: ClientsListComponent},

  { path: 'products',
    loadChildren: () => import('./components/products/products.module').then(e => e.ProducsModule)
  },

  // {
  //   path: 'dragons',
  //   loadChildren: './components/dragons/dragon.module#DragonModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

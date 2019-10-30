import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './components/sales/sales.component';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';

const routes: Routes = [
  {path: 'products', component: ProductsListComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'clients', component: ClientsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

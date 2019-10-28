import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { SalesComponent } from './components/sales/sales.component';
import { ClientsComponent } from './components/clients/clients.component';


const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'clients', component: ClientsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';

const ProductsRoutes: Routes = [
    { path: '', component: ProductsListComponent },

    { path: 'form', component: ProductsFormComponent },

    { path: 'form/:id', component: ProductsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ProductsRoutes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule {}

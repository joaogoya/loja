import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductResolver } from 'src/app/guards/resolvers/products/product-ressolver.guard';

const ProductsRoutes: Routes = [
    { path: '', component: ProductsListComponent },

    { path: 'form', component: ProductsFormComponent },

    {
      path: 'form/:id',
      component: ProductsFormComponent,
      resolve: {product: ProductResolver}
    }
];

@NgModule({
  imports: [RouterModule.forChild(ProductsRoutes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule {}

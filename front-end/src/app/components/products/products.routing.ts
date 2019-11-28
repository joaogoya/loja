import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { SingleProductResolver } from 'src/app/guards/resolvers/products/singleProductResolver.guard';
import { AllProductsResolver } from 'src/app/guards/resolvers/products/allProductsResolve.guard';

const ProductsRoutes: Routes = [

    { path: '', component: ProductsListComponent },

    {
      path: 'list',
      component: ProductsListComponent,
      resolve: {products: AllProductsResolver},
      runGuardsAndResolvers: 'always'
    },

    { path: 'form', component: ProductsFormComponent },

    {
      path: 'form/:id',
      component: ProductsFormComponent,
      resolve: {product: SingleProductResolver}
    }
];

@NgModule({
  imports: [RouterModule.forChild(ProductsRoutes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule {}

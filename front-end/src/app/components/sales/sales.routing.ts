import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesFormComponent } from './sales-form/sales-form.component';
import { SingleSaleResolver } from 'src/app/guards/resolvers/sales/single-sales-resolver.guard';
import { AllSalesResolver } from 'src/app/guards/resolvers/sales/all-sales-resolver.guard';

const SalesRoutes: Routes = [

    { path: '', component: SalesListComponent },

    {
      path: 'list',
      component: SalesListComponent,
      resolve: {products: AllSalesResolver},
      runGuardsAndResolvers: 'always'
    },

    { path: 'form', component: SalesFormComponent },

    {
      path: 'form/:id',
      component: SalesFormComponent,
      resolve: {sale: SingleSaleResolver}
    }
];

@NgModule({
  imports: [RouterModule.forChild(SalesRoutes)],
  exports: [RouterModule]
})

export class SalesRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesFormComponent } from './sales-form/sales-form.component';
import { SingleSaleResolver } from 'src/app/guards/resolvers/sales/single-sales-resolver.guard';
import { AllSalesResolver } from 'src/app/guards/resolvers/sales/all-sales-resolver.guard';
import { SaleCanDeactivate } from './../../guards/deactivates/sales/sales-deactivate.guard';

const SalesRoutes: Routes = [

    { path: '', component: SalesListComponent },

    {
      path: 'list',
      component: SalesListComponent,
      resolve: {sales: AllSalesResolver},
      runGuardsAndResolvers: 'always'
    },

    {
      path: 'form',
      component: SalesFormComponent,
      canDeactivate: [SaleCanDeactivate]
    },

    {
      path: 'form/:id',
      component: SalesFormComponent,
      resolve: {sale: SingleSaleResolver},
      canDeactivate: [SaleCanDeactivate]
    }
];

@NgModule({
  imports: [RouterModule.forChild(SalesRoutes)],
  exports: [RouterModule]
})

export class SalesRoutingModule {}

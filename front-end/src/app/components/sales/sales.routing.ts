import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesFormComponent } from './sales-form/sales-form.component';
import { SaleResolver } from 'src/app/guards/resolvers/sales/sales-resolver.guard';

const SalesRoutes: Routes = [
    { path: '', component: SalesListComponent },
    { path: 'form', component: SalesFormComponent },
    {
      path: 'form/:id',
      component: SalesFormComponent,
      resolve: {sale: SaleResolver}
    }
];

@NgModule({
  imports: [RouterModule.forChild(SalesRoutes)],
  exports: [RouterModule]
})

export class SalesRoutingModule {}

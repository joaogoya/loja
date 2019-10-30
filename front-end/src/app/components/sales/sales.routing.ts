import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesFormComponent } from './sales-form/sales-form.component';

const SalesRoutes: Routes = [
    { path: '', component: SalesListComponent },
    { path: 'form', component: SalesFormComponent },
    { path: 'form/:id', component: SalesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(SalesRoutes)],
  exports: [RouterModule]
})

export class SalesRoutingModule {}

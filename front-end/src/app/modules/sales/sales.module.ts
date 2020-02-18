import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../components/components.module';
import { SalesRoutingModule } from './sales.routing';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesFormComponent } from './sales-form/sales-form.component';
import { SingleSaleResolver } from './../../guards/resolvers/sales/single-sales-resolver.guard';
import { SaleCanDeactivate } from './../../guards/deactivates/sales/sales-deactivate.guard';

@NgModule({
  declarations: [
    SalesListComponent,
    SalesFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SalesRoutingModule
  ],
  providers: [SingleSaleResolver, SaleCanDeactivate]
})
export class SalesModule { }

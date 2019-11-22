import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { SalesRoutingModule } from './sales.routing';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesFormComponent } from './sales-form/sales-form.component';
import { SaleResolver } from 'src/app/guards/resolvers/sales/sales-resolver.guard';

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
  providers: [SaleResolver]
})
export class SalesModule { }

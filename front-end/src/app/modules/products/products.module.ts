import { ProductCanDeactivate } from '../../guards/deactivates/products/product-deactivate.guard';
import { SingleProductResolver } from '../../guards/resolvers/products/singleProductResolver.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRoutingModule } from './products.routing';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsFormComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    ProductsRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [
    SingleProductResolver,
    ProductCanDeactivate
  ]
})
export class ProducsModule { }

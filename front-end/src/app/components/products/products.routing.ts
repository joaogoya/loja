import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { FormDeactivateGuard } from 'src/app/guards/form-deactivate.guard';

const ProductsRoutes: Routes = [
    { path: '', component: ProductsListComponent },

    { path: 'form',
      canDeactivate: [FormDeactivateGuard],
      component: ProductsFormComponent
    },
    { path: 'form/:id',
      canDeactivate: [FormDeactivateGuard],
      component: ProductsFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(ProductsRoutes)],
  exports: [RouterModule]
})

export class ProductsRoutingModule {}

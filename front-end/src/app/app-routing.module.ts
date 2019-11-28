import { AllProductsResolver } from './guards/resolvers/products/allProductsResolve.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlankComponent } from './shared/blank/blank.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  { path: 'login',
    loadChildren: () => import('./components/login/login.module').then(e => e.LoginModule)
  },

  { path: 'home',
    canActivate: [LoginGuard],
    component: HomeComponent
  },

  { path: 'products',
    canLoad: [LoginGuard],
    resolve: {products: AllProductsResolver},
    loadChildren: () => import('./components/products/products.module').then(e => e.ProducsModule)
  },

  { path: 'clients',
    canLoad: [LoginGuard],
    loadChildren: () => import('./components/clients/clients.module').then(e => e.ClientssModule)
  },

  { path: 'sales',
    canLoad: [LoginGuard],
    loadChildren: () => import('./components/sales/sales.module').then(e => e.SalesModule)
  },

  { path: 'blank', component: BlankComponent },

  { path: '404', component: NotFoundComponent },

  { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { AllProductsResolver } from './guards/resolvers/products/allProductsResolve.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginGuard } from './guards/login/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlankComponent } from './components/blank/blank.component';
import { ErrorGuardsComponent } from './components/error-guards/error-guards.component';
import { AllClientsResolver } from './guards/resolvers/clients/all-clients-resolver.guard';
import { AllSalesResolver } from './guards/resolvers/sales/all-sales-resolver.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  { path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(e => e.LoginModule)
  },

  { path: 'home',
    canActivate: [LoginGuard],
    component: HomeComponent
  },

  { path: 'products',
    canLoad: [LoginGuard],
    resolve: {products: AllProductsResolver},
    loadChildren: () => import('./modules/products/products.module').then(e => e.ProducsModule)
  },

  { path: 'clients',
    canLoad: [LoginGuard],
    resolve: {clients: AllClientsResolver},
    loadChildren: () => import('./modules/clients/clients.module').then(e => e.ClientssModule)
  },

  { path: 'sales',
    canLoad: [LoginGuard],
    resolve: {sales: AllSalesResolver},
    loadChildren: () => import('./modules/sales/sales.module').then(e => e.SalesModule)
  },

  { path: 'error', component: ErrorGuardsComponent },

  { path: 'blank', component: BlankComponent },

  { path: '404', component: NotFoundComponent },

  { path: '**', redirectTo: '/404', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'sales',
    pathMatch: 'full'
  },

  { path: 'home',
    canActivate: [LoginGuard],
    component: HomeComponent
  },

  { path: 'login',
    loadChildren: () => import('./components/login/login.module').then(e => e.LoginModule)
  },

  { path: 'products',
    canLoad: [LoginGuard],
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

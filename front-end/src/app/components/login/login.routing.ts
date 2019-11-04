import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const ClientsRoutes: Routes = [
    { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ClientsRoutes)],
  exports: [RouterModule]
})

export class LoginRoutingModule {}

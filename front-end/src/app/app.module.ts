import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { SalesComponent } from './components/sales/sales.component';
import { ClientsComponent } from './components/clients/clients.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SalesComponent,
    ClientsComponent,
    MenuComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

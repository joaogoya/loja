import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesComponent } from './components/sales/sales.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ApiErrorComponent } from './shared/messages/api-error/api-error.component';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductsFormComponent } from './components/products/products-form/products-form.component';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    MenuComponent,
    SpinnerComponent,
    ApiErrorComponent,
    DataTableComponent,
    ProductsListComponent,
    ProductsFormComponent,
    ClientsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

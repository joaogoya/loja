import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ProducsModule } from './components/products/products.module';
import { AppComponent } from './app.component';
import { SalesComponent } from './components/sales/sales.component';
import { ClientsListComponent } from './components/clients/clients-list/clients-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesComponent,
    ClientsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProducsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

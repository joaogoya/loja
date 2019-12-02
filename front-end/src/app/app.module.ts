import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuComponent } from './shared/menu/menu.component';
import { LoginModule } from './components/login/login.module';
import { HomeComponent } from './components/utilitarians/home/home.component';
import { AllProductsResolver } from './guards/resolvers/products/allProductsResolve.guard';
import { AllClientsResolver } from './guards/resolvers/clients/all-clients-resolver.guard';
import { AllSalesResolver } from './guards/resolvers/sales/all-sales-resolver.guard';
import { NotFoundComponent } from './components/utilitarians/not-found/not-found.component';
import { BlankComponent } from './components/utilitarians/blank/blank.component';
import { DeactivateModalComponent } from './shared/deactivate-modal/deactivate-modal.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  entryComponents: [
    DeactivateModalComponent,
  ],
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    NotFoundComponent,
    BlankComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoginModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [AllProductsResolver, AllClientsResolver, AllSalesResolver],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

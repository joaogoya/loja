import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './components/components.module';
import { MenuComponent } from './components/menu/menu.component';
import { LoginModule } from './modules/login/login.module';
import { HomeComponent } from './components/home/home.component';
import { AllProductsResolver } from './guards/resolvers/products/allProductsResolve.guard';
import { AllClientsResolver } from './guards/resolvers/clients/all-clients-resolver.guard';
import { AllSalesResolver } from './guards/resolvers/sales/all-sales-resolver.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BlankComponent } from './components/blank/blank.component';
import { DeactivateModalComponent } from './components/deactivate-modal/deactivate-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

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
    FooterComponent,
    SpinnerComponent
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

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BlankComponent } from './pages/blank/blank.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './components/components.module';
import { LoginModule } from './modules/login/login.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'front-end'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('front-end');
  });

});

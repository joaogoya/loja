import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToasterComponent } from './toaster.component';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { ErrorGuardsComponent } from '../error-guards/error-guards.component';
import { SharedModule } from '../components.module';


describe('ToasterComponent', () => {
  let component: ToasterComponent;
  let fixture: ComponentFixture<ToasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [
        ToastrModule.forRoot(),
        RouterTestingModule.withRoutes([{path: 'error', component: ErrorGuardsComponent}]),
        SharedModule
      ],
      providers: [ToastrService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

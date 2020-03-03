import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientsFormComponent } from './clients-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToasterComponent } from './../../../components/toaster/toaster.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from 'src/app/components/data-table/wrapper/data-table.component';
import { DeskComponent } from 'src/app/components/data-table/desk/desk.component';
import { MobileComponent } from 'src/app/components/data-table/mobile/mobile.component';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';


describe('ClientsFormComponent', () => {
  let component: ClientsFormComponent;
  let fixture: ComponentFixture<ClientsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClientsFormComponent,
        ToasterComponent,
        DataTableComponent,
        DeskComponent,
        MobileComponent,
        DeleteModalComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        ModalModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

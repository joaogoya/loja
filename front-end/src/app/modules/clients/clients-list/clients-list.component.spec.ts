import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientsListComponent } from './clients-list.component';
import { ToasterComponent } from 'src/app/components/toaster/toaster.component';
import { DataTableComponent } from 'src/app/components/data-table/wrapper/data-table.component';
import { DeskComponent } from 'src/app/components/data-table/desk/desk.component';
import { MobileComponent } from 'src/app/components/data-table/mobile/mobile.component';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';

describe('ClientsListComponent', () => {
  let component: ClientsListComponent;
  let fixture: ComponentFixture<ClientsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClientsListComponent,
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
    fixture = TestBed.createComponent(ClientsListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.infos = {
      component: 'clients',
      btnMessage: 'Novo Cliente',
      data: [
        {
          _id: '5b23f7300a23c21a847e9e57',
          name: 'uuuuuuupppppppppciytciyc',
          email: 'dzsgsdhdhd@gmail.com',
          password: '25253636',
          slug: 'dfhdfyj',
          __v: 0,
        },
        {
          _id: '5b23f7300a23c21a847e9e57',
          name: 'uuuuuuupppppppppciytciyc',
          email: 'dzsgsdhdhd@gmail.com',
          password: '25253636',
          slug: 'dfhdfyj',
          __v: 0,
        },
        {
          _id: '5b23f7300a23c21a847e9e57',
          name: 'uuuuuuupppppppppciytciyc',
          email: 'dzsgsdhdhd@gmail.com',
          password: '25253636',
          slug: 'dfhdfyj',
          __v: 0,
        },
      ],
      success: true,
      error: {}
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

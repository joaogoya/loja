import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DataTableComponent } from './data-table.component';
import { DeskComponent } from '../desk/desk.component';
import { MobileComponent } from '../mobile/mobile.component';
import { DeleteModalComponent } from '../../delete-modal/delete-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        DataTableComponent,
        DeskComponent,
        MobileComponent,
        DeleteModalComponent
      ],
      imports:[
        NgbModule,
        ModalModule.forRoot(),
        RouterTestingModule.withRoutes([]),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.infos = {
      component: '',
      data: ''
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

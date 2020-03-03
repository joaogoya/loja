import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../components.module';
import { DeleteModalComponent } from './delete-modal.component';
import { BsModalRef } from 'ngx-bootstrap';
import { RouterTestingModule } from '@angular/router/testing';


describe('DeleteModalComponent', () => {
  let component: DeleteModalComponent;
  let fixture: ComponentFixture<DeleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [SharedModule, RouterTestingModule],
      providers:[BsModalRef]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModalComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    component.toDelete = {
      data:{
          _id: "5b23f7300a23c21a847e9e57",
          name: "uuuuuuupppppppppciytciyc",
          email: "dzsgsdhdhd@gmail.com",
          password: "25253636",
          slug: "dfhdfyj",
          __v: 0,
      }
    };
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

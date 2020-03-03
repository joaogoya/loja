import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsFormComponent } from './products-form.component';
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

describe('ProductsFormComponent', () => {
  let component: ProductsFormComponent;
  let fixture: ComponentFixture<ProductsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductsFormComponent,
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
    fixture = TestBed.createComponent(ProductsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

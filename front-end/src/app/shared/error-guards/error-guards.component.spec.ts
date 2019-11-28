import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorGuardsComponent } from './error-guards.component';

describe('ErrorGuardsComponent', () => {
  let component: ErrorGuardsComponent;
  let fixture: ComponentFixture<ErrorGuardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorGuardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

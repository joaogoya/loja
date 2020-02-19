import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DeskComponent } from "./desk.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Data } from '@angular/router';
import { Input } from '@angular/core';

describe("DeskComponent", () => {
  let component: DeskComponent;
  let fixture: ComponentFixture<DeskComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeskComponent],
      imports: [NgbModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    component.data = ['aaa'];
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

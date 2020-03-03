import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SingleSaleResolver } from './single-sales-resolver.guard';

describe('SingleSaleResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleSaleResolver, HttpClientModule],
      imports:[HttpClientModule, RouterTestingModule]
    });
  });

  it('should ...', inject([SingleSaleResolver], (guard: SingleSaleResolver) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed, async, inject } from '@angular/core/testing';

import { SingleSaleResolver } from './single-sales-resolver.guard';

describe('SingleSaleResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleSaleResolver]
    });
  });

  it('should ...', inject([SingleSaleResolver], (guard: SingleSaleResolver) => {
    expect(guard).toBeTruthy();
  }));
});

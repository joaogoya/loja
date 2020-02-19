import { TestBed, async, inject } from '@angular/core/testing';

import { AllSalesResolver } from './all-sales-resolver.guard';

describe('AllSalesResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllSalesResolver]
    });
  });

  it('should ...', inject([AllSalesResolver], (guard: AllSalesResolver) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed, async, inject } from '@angular/core/testing';

import { AllSalesResolverGuard } from './all-sales-resolver.guard';

describe('AllSalesResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllSalesResolverGuard]
    });
  });

  it('should ...', inject([AllSalesResolverGuard], (guard: AllSalesResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});

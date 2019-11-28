import { TestBed, async, inject } from '@angular/core/testing';

import { AllProductsResolver } from './allProductsResolve.guard';

describe('AllProductsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllProductsResolver]
    });
  });

  it('should ...', inject([AllProductsResolver], (guard: AllProductsResolver) => {
    expect(guard).toBeTruthy();
  }));
});

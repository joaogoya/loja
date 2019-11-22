import { TestBed, async, inject } from '@angular/core/testing';

import { ProductResolver } from './product-ressolver.guard';

describe('ProductSingleGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductResolver]
    });
  });

  it('should ...', inject([ProductResolver], (guard: ProductResolver) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed, async, inject } from '@angular/core/testing';

import { ProductCanDeactivate } from './product-deactivate.guard';

describe('ProductDactivatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCanDeactivate]
    });
  });

  it('should ...', inject([ProductCanDeactivate], (guard: ProductCanDeactivate) => {
    expect(guard).toBeTruthy();
  }));
});

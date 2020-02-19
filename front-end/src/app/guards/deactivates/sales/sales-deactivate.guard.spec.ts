import { TestBed, async, inject } from '@angular/core/testing';
import { SaleCanDeactivate } from './sales-deactivate.guard';

describe('SalesDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaleCanDeactivate]
    });
  });

  it('should ...', inject([SaleCanDeactivate], (guard: SaleCanDeactivate) => {
    expect(guard).toBeTruthy();
  }));
});

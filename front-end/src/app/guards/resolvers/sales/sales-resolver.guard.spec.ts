import { TestBed, async, inject } from '@angular/core/testing';

import { SalesResolverGuard } from './sales-resolver.guard';

describe('SalesResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesResolverGuard]
    });
  });

  it('should ...', inject([SalesResolverGuard], (guard: SalesResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});

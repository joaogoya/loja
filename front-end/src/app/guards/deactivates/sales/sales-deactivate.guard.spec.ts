import { TestBed, async, inject } from '@angular/core/testing';

import { SalesDeactivateGuard } from './sales-deactivate.guard';

describe('SalesDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalesDeactivateGuard]
    });
  });

  it('should ...', inject([SalesDeactivateGuard], (guard: SalesDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed, async, inject } from '@angular/core/testing';

import { ClientDeactivateGuard } from './client-deactivate.guard';

describe('ClientDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientDeactivateGuard]
    });
  });

  it('should ...', inject([ClientDeactivateGuard], (guard: ClientDeactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed, async, inject } from '@angular/core/testing';
import { ClientCanDeactivate } from './client-deactivate.guard';

describe('ClientDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientCanDeactivate]
    });
  });

  it('should ...', inject([ClientCanDeactivate], (guard: ClientCanDeactivate) => {
    expect(guard).toBeTruthy();
  }));
});

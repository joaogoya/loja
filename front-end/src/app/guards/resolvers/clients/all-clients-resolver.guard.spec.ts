import { TestBed, async, inject } from '@angular/core/testing';

import { AllClientsResolverGuard } from './all-clients-resolver.guard';

describe('AllClientsResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllClientsResolverGuard]
    });
  });

  it('should ...', inject([AllClientsResolverGuard], (guard: AllClientsResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});

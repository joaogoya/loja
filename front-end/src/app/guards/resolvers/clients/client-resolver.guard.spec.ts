import { TestBed, async, inject } from '@angular/core/testing';

import { ClientResolverGuard } from './client-resolver.guard';

describe('ClientResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientResolverGuard]
    });
  });

  it('should ...', inject([ClientResolverGuard], (guard: ClientResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});

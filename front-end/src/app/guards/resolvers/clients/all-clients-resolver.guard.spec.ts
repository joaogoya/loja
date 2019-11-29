import { TestBed, async, inject } from '@angular/core/testing';

import { AllClientsResolver } from './all-clients-resolver.guard';

describe('AllClientsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllClientsResolver]
    });
  });

  it('should ...', inject([AllClientsResolver], (guard: AllClientsResolver) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed, async, inject } from '@angular/core/testing';
import { SingleClientResolver } from './single-client-resolver.guard';

describe('ClientResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleClientResolver]
    });
  });

  it('should ...', inject([SingleClientResolver], (guard: SingleClientResolver) => {
    expect(guard).toBeTruthy();
  }));
});

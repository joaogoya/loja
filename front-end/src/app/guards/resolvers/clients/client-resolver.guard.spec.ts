import { TestBed, async, inject } from '@angular/core/testing';
import { SingleClientResolver } from './sigleClientResolver.guard';

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

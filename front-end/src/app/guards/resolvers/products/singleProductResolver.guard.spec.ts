import { TestBed, async, inject } from '@angular/core/testing';

import { SingleProductResolver } from './singleProductResolver.guard';

describe('SingleProductResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleProductResolver]
    });
  });

  it('should ...', inject([SingleProductResolver], (guard: SingleProductResolver) => {
    expect(guard).toBeTruthy();
  }));
});

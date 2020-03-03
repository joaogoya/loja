import { TestBed, async, inject } from '@angular/core/testing';
import { SingleProductResolver } from './singleProductResolver.guard';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SingleProductResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleProductResolver, HttpClientModule],
      imports:[HttpClientModule, RouterTestingModule]
    });
  });

  it('should ...', inject([SingleProductResolver], (guard: SingleProductResolver) => {
    expect(guard).toBeTruthy();
  }));
});

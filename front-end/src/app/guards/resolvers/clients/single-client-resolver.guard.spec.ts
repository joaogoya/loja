import { TestBed, async, inject } from '@angular/core/testing';
import { SingleClientResolver } from './single-client-resolver.guard';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SingleClientResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleClientResolver, HttpClientModule],
      imports:[HttpClientModule, RouterTestingModule]
    });
  });

  it('should ...', inject([SingleClientResolver], (guard: SingleClientResolver) => {
    expect(guard).toBeTruthy();
  }));
});

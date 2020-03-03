import { TestBed, async, inject } from '@angular/core/testing';
import { AllProductsResolver } from './allProductsResolve.guard';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AllProductsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllProductsResolver],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ]
    });
  });

  it('should ...', inject([AllProductsResolver], (guard: AllProductsResolver) => {
    expect(guard).toBeTruthy();
  }));
});

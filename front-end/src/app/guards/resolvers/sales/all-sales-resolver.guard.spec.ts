import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AllSalesResolver } from './all-sales-resolver.guard';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('AllSalesResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllSalesResolver],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ]
    });
  });

  it('should ...', inject([AllSalesResolver], (guard: AllSalesResolver) => {
    expect(guard).toBeTruthy();
  }));
});

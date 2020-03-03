import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { AllClientsResolver } from './all-clients-resolver.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('AllClientsResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllClientsResolver],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
      ]
    });
  });

  it('should ...', inject([AllClientsResolver], (guard: AllClientsResolver) => {
    expect(guard).toBeTruthy();
  }));
});

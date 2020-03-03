import { TestBed, async, inject } from '@angular/core/testing';
import { SaleCanDeactivate } from './sales-deactivate.guard';
import { BsModalRef } from 'ngx-bootstrap';
import { SharedModule } from 'src/app/components/components.module';

describe('SalesDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaleCanDeactivate, BsModalRef],
      imports: [SharedModule]
    });
  });

  it('should ...', inject([SaleCanDeactivate], (guard: SaleCanDeactivate) => {
    expect(guard).toBeTruthy();
  }));
});

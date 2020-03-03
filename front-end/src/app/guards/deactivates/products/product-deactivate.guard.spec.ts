import { TestBed, async, inject } from '@angular/core/testing';

import { ProductCanDeactivate } from './product-deactivate.guard';
import { BsModalRef } from 'ngx-bootstrap';
import { SharedModule } from 'src/app/components/components.module';

describe('ProductDactivatedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductCanDeactivate, BsModalRef],
      imports: [SharedModule]
    });
  });

  it('should ...', inject([ProductCanDeactivate], (guard: ProductCanDeactivate) => {
    expect(guard).toBeTruthy();
  }));
});

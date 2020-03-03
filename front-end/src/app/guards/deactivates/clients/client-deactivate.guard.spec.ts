import { TestBed, async, inject } from '@angular/core/testing';
import { ClientCanDeactivate } from './client-deactivate.guard';
import { SharedModule } from 'src/app/components/components.module';
import { BsModalRef } from 'ngx-bootstrap';


describe('ClientDeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientCanDeactivate, BsModalRef],
      imports: [SharedModule]
    });
  });

  it('should ...', inject([ClientCanDeactivate], (guard: ClientCanDeactivate) => {
    expect(guard).toBeTruthy();
  }));
});

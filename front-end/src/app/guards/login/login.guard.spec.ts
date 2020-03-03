import { TestBed, async, inject } from '@angular/core/testing';
import { LoginGuard } from './login.guard';
import { BsModalRef } from 'ngx-bootstrap';
import { SharedModule } from 'src/app/components/components.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginGuard, BsModalRef],
      imports: [SharedModule, RouterTestingModule]
    });
  });

  it('should ...', inject([LoginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});

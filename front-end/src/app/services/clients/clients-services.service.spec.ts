import { TestBed } from '@angular/core/testing';

import { ClientsServicesService } from './clients-services.service';

describe('ClientsServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientsServicesService = TestBed.get(ClientsServicesService);
    expect(service).toBeTruthy();
  });
});

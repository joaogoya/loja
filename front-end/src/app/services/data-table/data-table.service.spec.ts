import { TestBed } from '@angular/core/testing';

import { DataTableService } from './data-table.service';

describe('BroadcastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataTableService = TestBed.get(DataTableService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FilterQuantityService } from './filter-quantity.service';

describe('FilterQuantityService', () => {
  let service: FilterQuantityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterQuantityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

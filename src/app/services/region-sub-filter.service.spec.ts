import { TestBed } from '@angular/core/testing';

import { RegionSubFilterService } from './region-sub-filter.service';

describe('RegionSubFilterService', () => {
  let service: RegionSubFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegionSubFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

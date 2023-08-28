import { TestBed } from '@angular/core/testing';

import { WeaponSubFilterService } from './weapon-sub-filter.service';

describe('WeaponSubFilterService', () => {
  let service: WeaponSubFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponSubFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

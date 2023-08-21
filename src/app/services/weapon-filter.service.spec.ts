import { TestBed } from '@angular/core/testing';

import { WeaponFilterService } from './weapon-filter.service';

describe('WeaponFilterService', () => {
  let service: WeaponFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaponFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

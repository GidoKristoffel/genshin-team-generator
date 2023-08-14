import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAvailabilityFilterComponent } from './character-availability-filter.component';

describe('CharacterAvailabilityFilterComponent', () => {
  let component: CharacterAvailabilityFilterComponent;
  let fixture: ComponentFixture<CharacterAvailabilityFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterAvailabilityFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterAvailabilityFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

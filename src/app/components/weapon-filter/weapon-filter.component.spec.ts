import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponFilterComponent } from './weapon-filter.component';

describe('WeaponFilterComponent', () => {
  let component: WeaponFilterComponent;
  let fixture: ComponentFixture<WeaponFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeaponFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

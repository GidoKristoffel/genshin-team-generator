import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchIconComponent } from './switch-icon.component';

describe('SwitchIconComponent', () => {
  let component: SwitchIconComponent;
  let fixture: ComponentFixture<SwitchIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

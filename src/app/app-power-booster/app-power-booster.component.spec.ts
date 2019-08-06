import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPowerBoosterComponent } from './app-power-booster.component';

describe('AppPowerBoosterComponent', () => {
  let component: AppPowerBoosterComponent;
  let fixture: ComponentFixture<AppPowerBoosterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPowerBoosterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPowerBoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

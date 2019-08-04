import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriosityDetailComponent } from './curiosity-detail.component';

describe('CuriosityDetailComponent', () => {
  let component: CuriosityDetailComponent;
  let fixture: ComponentFixture<CuriosityDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuriosityDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriosityDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

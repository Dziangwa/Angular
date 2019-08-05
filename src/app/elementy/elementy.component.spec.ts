import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementyComponent } from './elementy.component';

describe('ElementyComponent', () => {
  let component: ElementyComponent;
  let fixture: ComponentFixture<ElementyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

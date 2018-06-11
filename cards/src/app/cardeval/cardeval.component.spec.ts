import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardevalComponent } from './cardeval.component';

describe('CardevalComponent', () => {
  let component: CardevalComponent;
  let fixture: ComponentFixture<CardevalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardevalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardevalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

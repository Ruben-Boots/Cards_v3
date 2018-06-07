import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardplayComponent } from './cardplay.component';

describe('CardplayComponent', () => {
  let component: CardplayComponent;
  let fixture: ComponentFixture<CardplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

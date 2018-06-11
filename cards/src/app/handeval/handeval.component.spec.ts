import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandevalComponent } from './handeval.component';

describe('HandevalComponent', () => {
  let component: HandevalComponent;
  let fixture: ComponentFixture<HandevalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandevalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandevalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayedcardsComponent } from './playedcards.component';

describe('PlayedcardsComponent', () => {
  let component: PlayedcardsComponent;
  let fixture: ComponentFixture<PlayedcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayedcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayedcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

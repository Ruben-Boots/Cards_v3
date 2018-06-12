import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeuzesComponent } from './keuzes.component';

describe('KeuzesComponent', () => {
  let component: KeuzesComponent;
  let fixture: ComponentFixture<KeuzesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeuzesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeuzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

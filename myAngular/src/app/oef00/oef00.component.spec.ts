import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oef00Component } from './oef00.component';

describe('Oef00Component', () => {
  let component: Oef00Component;
  let fixture: ComponentFixture<Oef00Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oef00Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oef00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

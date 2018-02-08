import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OefnotitieComponent } from './oefnotitie.component';

describe('Oef00Component', () => {
  let component: OefnotitieComponent;
  let fixture: ComponentFixture<OefnotitieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OefnotitieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OefnotitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

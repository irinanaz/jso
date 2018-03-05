import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpmaakComponent } from './opmaak.component';

describe('OpmaakComponent', () => {
  let component: OpmaakComponent;
  let fixture: ComponentFixture<OpmaakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpmaakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpmaakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

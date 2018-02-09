import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HogerlagerComponent } from './hogerlager.component';

describe('HogerlagerComponent', () => {
  let component: HogerlagerComponent;
  let fixture: ComponentFixture<HogerlagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HogerlagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HogerlagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

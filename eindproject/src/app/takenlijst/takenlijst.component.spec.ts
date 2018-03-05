import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenlijstComponent } from './takenlijst.component';

describe('TakenlijstComponent', () => {
  let component: TakenlijstComponent;
  let fixture: ComponentFixture<TakenlijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakenlijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

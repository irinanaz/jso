import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MijnenvegerComponent } from './mijnenveger.component';

describe('MijnenvegerComponent', () => {
  let component: MijnenvegerComponent;
  let fixture: ComponentFixture<MijnenvegerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MijnenvegerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MijnenvegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

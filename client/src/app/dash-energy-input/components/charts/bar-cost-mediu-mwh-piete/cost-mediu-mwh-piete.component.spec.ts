import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostMediuMwhPieteComponent } from './cost-mediu-mwh-piete.component';

describe('CostMediuMwhPieteComponent', () => {
  let component: CostMediuMwhPieteComponent;
  let fixture: ComponentFixture<CostMediuMwhPieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostMediuMwhPieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostMediuMwhPieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

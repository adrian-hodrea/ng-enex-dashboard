import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalBarCostMediuMwhStackComponent } from './horizontal-bar-cost-mediu-mwh-stack.component';

describe('HorizontalBarCostMediuMwhStackComponent', () => {
  let component: HorizontalBarCostMediuMwhStackComponent;
  let fixture: ComponentFixture<HorizontalBarCostMediuMwhStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalBarCostMediuMwhStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalBarCostMediuMwhStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

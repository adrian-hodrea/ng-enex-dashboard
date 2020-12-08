import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostMediuMwhComponent } from './cost-mediu-mwh.component';

describe('CostMediuMwhComponent', () => {
  let component: CostMediuMwhComponent;
  let fixture: ComponentFixture<CostMediuMwhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostMediuMwhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostMediuMwhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

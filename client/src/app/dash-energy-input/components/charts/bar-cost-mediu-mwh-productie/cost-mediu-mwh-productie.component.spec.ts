import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostMediuMwhProductieComponent } from './cost-mediu-mwh-productie.component';

describe('CostMediuMwhProductieComponent', () => {
  let component: CostMediuMwhProductieComponent;
  let fixture: ComponentFixture<CostMediuMwhProductieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostMediuMwhProductieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostMediuMwhProductieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

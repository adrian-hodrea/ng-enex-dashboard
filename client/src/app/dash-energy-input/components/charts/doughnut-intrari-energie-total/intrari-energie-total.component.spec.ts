import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrariEnergieTotalComponent } from './intrari-energie-total.component';

describe('IntrariEnergieTotalComponent', () => {
  let component: IntrariEnergieTotalComponent;
  let fixture: ComponentFixture<IntrariEnergieTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrariEnergieTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrariEnergieTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

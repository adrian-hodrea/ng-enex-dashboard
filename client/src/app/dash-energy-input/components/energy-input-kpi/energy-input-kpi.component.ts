import { Component, OnInit, Input } from '@angular/core';
import { Kpi } from '../../../core/models/dash-energy-input.models';

@Component({
  selector: 'app-energy-input-kpi',
  templateUrl: './energy-input-kpi.component.html',
  styleUrls: ['./energy-input-kpi.component.scss']
})
export class EnergyInputKpiComponent implements OnInit {
  @Input() kpiData:Kpi
  constructor() { }

  ngOnInit(): void {
  }

}

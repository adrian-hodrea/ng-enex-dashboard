import { Component, OnInit, Input } from '@angular/core';
import { dashEnergyInputData, Kpi } from '../../../core/models/dash-energy-input.models';


@Component({
  selector: 'app-energy-input-data',
  templateUrl: './energy-input-data.component.html',
  styleUrls: ['./energy-input-data.component.scss']
})
export class EnergyInputDataComponent implements OnInit {
  @Input() energyInputData: dashEnergyInputData;

  constructor() {
    console.log("this.energyInputData constructor:", this.energyInputData);
  }

  ngOnInit(): void {
  };

}

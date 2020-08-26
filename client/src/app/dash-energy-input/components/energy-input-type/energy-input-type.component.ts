import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { PieteComponent } from '../../../core/models/dash-energy-input.models';

@Component({
  selector: 'app-energy-input-type',
  templateUrl: './energy-input-type.component.html',
  styleUrls: ['./energy-input-type.component.scss']
})
export class EnergyInputTypeComponent implements OnInit {

  @Input()energySourceData:PieteComponent;
  constructor() { }

  ngOnInit(): void {
    console.log("energySourceData:",this.energySourceData)
  }

}

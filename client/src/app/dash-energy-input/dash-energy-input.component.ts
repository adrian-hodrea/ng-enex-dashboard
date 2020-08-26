import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashEnergyInputService } from './dash-energy-input.service';
import { prepareDataForEnergyInputComponent } from '../core/helper-functions/prepareRootData';
import { PieteComponent, dashEnergyInputData } from '../core/models/dash-energy-input.models';

@Component({
  selector: 'app-dash-energy-input',
  templateUrl: './dash-energy-input.component.html',
  styleUrls: ['./dash-energy-input.component.scss']
})
export class DashEnergyInputComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  private fromDatePri: number = 16830720;
  private toDatePri: number = 16873920;
  public data:dashEnergyInputData =  {
    energyData: [],
    indirData: 0  
  };

  public isFetching: boolean = false;


  constructor(
    private breakpointObserver: BreakpointObserver,
    public dashEnergyInputService: DashEnergyInputService
  ) { }

  ngOnInit() {
    this.dashEnergyInputService.fetchData(this.fromDatePri, this.toDatePri)
      .subscribe(results => {
        const pieteComponents:PieteComponent[] = prepareDataForEnergyInputComponent(results[0], results[1], results[2]);
        this.data.energyData = pieteComponents;
        this.data.indirData = results[3];
      });
    console.log("this.data", this.data);

  };
}

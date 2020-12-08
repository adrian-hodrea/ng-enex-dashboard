import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { DashEnergyInputService } from './dash-energy-input.service';
import { prepareDataForEnergyInputComponent } from '../core/helper-functions/prepareRootData';
import { dashEnergyInputData } from '../core/models/dash-energy-input.models';
import { DataTransferService } from '../core/services/data-transfer.service';
import { Period, periodPri } from '../core/models/dash-energy-input.models';

@Component({
  selector: 'app-dash-energy-input',
  templateUrl: './dash-energy-input.component.html',
  styleUrls: ['./dash-energy-input.component.scss']
})
export class DashEnergyInputComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }

      return {
        columns: 3,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 1, rows: 2 },
        table: { cols: 3, rows: 5 },
      };
    })
  );

  public data: dashEnergyInputData;
  public isFetching: boolean = true;
  public intervalPriFormat:periodPri = {
    fromDate: null,
    toDate: null
  };

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dashEnergyInputService: DashEnergyInputService,
    public dataService: DataTransferService) 
    { 
      this.intervalPriFormat = dataService.intervalPriFormat;
     }
  ngOnInit() {
    this.prepareData();
}

prepareData() {
    this.dashEnergyInputService.fetchData(this.intervalPriFormat.fromDate, this.intervalPriFormat.toDate)
    .subscribe(results => {
      const rootData: dashEnergyInputData = prepareDataForEnergyInputComponent(results[0], results[1], results[2],  results[3]);
      this.data = rootData;
      setTimeout(() => {
        this.isFetching = false;
      }, 1500);
    });
  }
}

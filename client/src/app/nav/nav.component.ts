import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DataTransferService } from '../core/services/data-transfer.service';
import { Period, periodPri } from '../core/models/dash-energy-input.models';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public menuItems:string[] = ['energy-input', 'sales', 'orders', 'customers', 'products'];
  public intervalPriFormat:periodPri = {
    fromDate: null,
    toDate: null
  };

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dataService: DataTransferService) 
    {
      this.intervalPriFormat = dataService.intervalPriFormat;
    }

}

import { Component, OnInit } from '@angular/core';
import { checkFirstDayOfMonth } from '../core/helper-functions/check-if-is-first-day-of-month'
import { checkLastDayOfMonth } from '../core/helper-functions/check-if-is-last-day-of-month'
import { getDateInOrclFormat } from '../core/helper-functions/get-date-in-orcl-format'
import { checkIfIntervalIsCorect } from '../core/helper-functions/check-if-interval-is-corect'
import { DataTransferService } from '../core/services/data-transfer.service';
import { Period, periodPri } from '../core/models/dash-energy-input.models';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public period: Period = {
    fromDate: null,
    toDate: null
  };
  public periodPri: periodPri = {
    fromDate: null,
    toDate: null
  };

  public fdtValidated: Boolean = true;
  public tdtValidated: Boolean = true;
  public intervalCorect: Boolean = false;

  constructor(private dataService: DataTransferService) { }

  ngOnInit(): void {
  }

  handleDateChange(event): void {
    const { name, value } = event.target;

    if (name === "fromDate") {
      let fdtok = checkFirstDayOfMonth(value);
      if (!fdtok) {
        this.fdtValidated = false;
      } else {
        this.fdtValidated = true;
        const priValue = getDateInOrclFormat(value);
        this.period.fromDate = value;
        this.periodPri.fromDate = priValue;
      }
    } else {    // name === "toDate"
      let tdtok = checkLastDayOfMonth(value);
      if (!tdtok) {
        this.tdtValidated = false;
      } else {
        this.tdtValidated = true;
        const priValue = getDateInOrclFormat(value);
        this.period.toDate = value;
        this.periodPri.toDate = priValue;
      }
    }

    if (this.fdtValidated && this.tdtValidated ) {
      this.intervalCorect = checkIfIntervalIsCorect(this.period.fromDate,this.period.toDate)
    } else {
      this.intervalCorect = false;
    }
  } // end of handleDateChange method


  ngOnDestroy() {
    this.dataService.intervalPriFormat = this.periodPri; 
 }

}

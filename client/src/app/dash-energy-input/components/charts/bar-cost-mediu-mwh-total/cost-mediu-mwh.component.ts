import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, ChartTooltipOptions, plugins } from 'chart.js';
import { Label } from 'ng2-charts';
import { Input } from '@angular/core';
import { PieteComponent } from '../../../../core/models/dash-energy-input.models';
import { reduce } from 'rxjs/operators';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
//import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-cost-mediu-mwh',
  templateUrl: './cost-mediu-mwh.component.html',
  styleUrls: ['./cost-mediu-mwh.component.scss']
})
export class CostMediuMwhComponent implements OnInit {
  @Input() energySourceData: PieteComponent;
  public chartLabels: any;
  public barChartOptions: ChartOptions = {
    responsive: true,
    animation: {
      duration: 3000,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: "rgba(240,240,240,0.7)",
      titleFontColor: "black",
      titleFontSize: 14,
      titleFontStyle: "bold",
      bodyFontColor: "black",
      bodyFontSize: 14,
      bodyFontStyle: "bold",
      borderColor: "lightgrey",
      borderWidth: 1,
      callbacks: {
        label: function (tooltipItem, data) {
          var label: any = data.datasets[tooltipItem.datasetIndex].label || '';

          if (label) {
            label += ': ';
          }
          label += Math.round(Number(tooltipItem.yLabel) * 100) / 100;
          label += ' RON/MWh';
          return label;
        }
      }
    },
    plugins: {
      labels: {
        render: function (args) {
          return '' + args.value.toFixed(2);
        },
        showZero: false
      }
    }
  }
  public barChartLabels: Label[] = ['Cost mediu MWh'];
  /*
  = ['2006', '2007', '2008', '2009', '2010'];
  */
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[];
  public effectColors = {
    highlight: 'rgba(255, 255, 255, 0.75)',
    shadow: 'rgba(0, 0, 0, 0.5)',
    glow: 'rgb(255, 255, 0)'
  };

  /*
 = [
   { data: [65, 59, 80, 81, 56], label: 'Series A' },
   { data: [28, 48, 40, 19, 86], label: 'Series B' },
   { data: [28, 48, 42, 19, 86], label: 'Series C' }

 ];
*/
  constructor() {
    //this.chartLabels = ChartDataLabels;
  }

  ngOnInit() {
    this.prepareChartData();
    console.log("this.chartLabels:", this.chartLabels);
    console.log("this.barChartData:", this.barChartData);
    console.log("this.barChartOptions:", this.barChartOptions);
  }


  prepareChartData() {
    this.barChartData = this.energySourceData.kpis.map(
      (item) => {
        let formatedLabel = item.title;
        if (item.title.substr(0, 9).trim() === 'Cantitati') {
          formatedLabel = item.title.substr(10, 50).trim();
        };
        let rObj = {
          data: [item.costMediu],
          label: formatedLabel,
          backgroundColor: item.backgroundColorNoQuant,
          borderColor: item.backgroundColor,
          borderWidth: 1,
          hoverBackgroundColor: item.backgroundColor,
          hoverBorderColor: item.backgroundColor,

          shadowOffsetX: 3,
          shadowOffsetY: 3,
          shadowBlur: 10,
          shadowColor: this.effectColors.shadow,
          bevelWidth: 2,
          bevelHighlightColor: this.effectColors.highlight,
          bevelShadowColor: this.effectColors.shadow
        };
        return rObj
      }
    )
  }


}

import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Input } from '@angular/core';
import { Kpi } from '../../../../core/models/dash-energy-input.models';
import 'chartjs-plugin-labels';
import 'chartjs-plugin-style';


@Component({
  selector: 'app-horizontal-bar-cost-mediu-mwh-stack',
  templateUrl: './horizontal-bar-cost-mediu-mwh-stack.component.html',
  styleUrls: ['./horizontal-bar-cost-mediu-mwh-stack.component.scss']
})
export class HorizontalBarCostMediuMwhStackComponent implements OnInit {
  @Input() costMediu: Kpi;
  @Input() chIndir: Kpi;

  public barChartOptions: ChartOptions = {
    responsive: true,
    animation: {
      duration: 3000,
    },
    legend: {
      position: 'right'
    },
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
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
      labels:
      {
        render: function (args) {
          return '' + args.value.toFixed(2);
        },
        showZero: false,
      }
    }
  }

  public barChartLabels: Label[] = ['RON/MWh'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit() {
    this.prepareCharData();
  }

  prepareCharData() {
    this.barChartData = [
      { data: [this.costMediu.costMediu], label: 'Cost Mediu Intrari' },
      { data: [this.chIndir.costMediu], label: 'Cost Mediu Administrative' }
    ];
    };

}

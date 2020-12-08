import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, MultiDataSet } from 'ng2-charts';
import { Input } from '@angular/core';
import { PieteComponent } from '../../../../core/models/dash-energy-input.models';
import 'chartjs-plugin-labels';
import 'chartjs-plugin-style';


@Component({
  selector: 'app-intrari-energie-total',
  templateUrl: './intrari-energie-total.component.html',
  styleUrls: ['./intrari-energie-total.component.scss']
})
export class IntrariEnergieTotalComponent implements OnInit {
  @Input() energySourceData: PieteComponent;
  public pieChartOptions: ChartOptions = {
    cutoutPercentage: 40, // partea alba din interiorul boughnut-ului
    responsive: true,
    animation: {
      duration: 3000,
    },
    legend: {
      position: 'right'
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
      /*
      callbacks: {
        label: function (tooltipItem, data) {
          var label: any = data.datasets[tooltipItem.datasetIndex].label || '';

          if (label) {
            label += ': ';
          }
          label += Math.round(Number(tooltipItem.yLabel) * 100) / 100;
          label += ' RON';
          return label;
        }
      }
      */
    },
    plugins: {
      labels: 
        {
          render: 'percentage',
          fontColor: function (data) {
            var rgb = data.dataset.backgroundColor[data.index];
            var threshold = 140;
            var luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
            return luminance > threshold ? 'black' : 'white';
          },
          showZero: false
        }  
    }
  };
  public pieChartLabels: Label[];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = {
    display: true,
    position: 'right'
  };
  public pieChartPlugins = [];
  public pieChartData: ChartDataSets[] = [];
  public pieChartColors: any[] = [];
  public effectColors = {
    highlight: 'rgba(255, 255, 255, 0.75)',
    shadow: 'rgba(0, 0, 0, 0.5)',
    glow: 'rgb(255, 255, 0)'
  };
  constructor() { }

  ngOnInit() {
    this.prepareChartData();
  }

  prepareChartData() {

    let sourceData = this.energySourceData.kpis.slice();
    sourceData.pop();
    let valoareDataSet = {
      data: [],
      backgroundColor: [],
      label: 'Valoare',
      borderWidth: 2,
      weight: 10,

      shadowOffsetX: 3,
      shadowOffsetY: 3,
      shadowBlur: 10,
      shadowColor: this.effectColors.shadow,
      bevelWidth: 2,
      bevelHighlightColor: this.effectColors.highlight,
      bevelShadowColor: this.effectColors.shadow,
      hoverInnerGlowWidth: 20,
      hoverInnerGlowColor: this.effectColors.glow,
      hoverOuterGlowWidth: 20,
      hoverOuterGlowColor: this.effectColors.glow
    };
    let cantitateDataSet = {
      data: [],
      backgroundColor: [],
      label: 'Cantitate',
      borderWidth: 2,
      weight: 10,

      shadowOffsetX: 3,
      shadowOffsetY: 3,
      shadowBlur: 10,
      shadowColor: this.effectColors.shadow,
      bevelWidth: 2,
      bevelHighlightColor: this.effectColors.highlight,
      bevelShadowColor: this.effectColors.shadow,
      hoverInnerGlowWidth: 20,
      hoverInnerGlowColor: this.effectColors.glow,
      hoverOuterGlowWidth: 20,
      hoverOuterGlowColor: this.effectColors.glow
    };
    /* Construiesc dataset pentru VALOARE intrari energie */
    valoareDataSet.data = sourceData.map(
      (item, index) => {
        return item.valoare
      }
    )
    valoareDataSet.backgroundColor = sourceData.map(
      (item) => {
        return item.backgroundColor
      }
    );

    /* Construiesc dataset pentru CANTITATE intrari energie */
    cantitateDataSet.data = sourceData.map(
      (item, index) => {
        return item.cantitate
      }
    )
    cantitateDataSet.backgroundColor = sourceData.map(
      (item) => {
        return item.backgroundColor
      }
    );

    this.pieChartData.push(valoareDataSet);
    this.pieChartData.push(cantitateDataSet);

    console.log("this.pieChartData:", this.pieChartData);

    this.pieChartLabels = sourceData.map(
      (item) => {
        let label = item.title.substr(10, 50);
        label = label.trim();
        return label;
      }
    )


    let setBackgroundColor = sourceData.map(
      (item) => {
        return item.backgroundColor
      }
    )

    let rObj = {
      backgroundColor: setBackgroundColor
    }

    this.pieChartColors.push(rObj);
    this.pieChartColors.push(rObj);

    console.log("this.pieChartColors", this.pieChartColors);

  }


}

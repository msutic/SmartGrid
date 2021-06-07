import { Component, OnInit, ViewChild } from '@angular/core';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

// pie chart
import {
  ApexNonAxisChartSeries,
  ApexResponsive
} from "ng-apexcharts";
import { Incident } from 'src/app/entities/incident';
import { Safetydoc } from 'src/app/entities/safetydocs/safetydoc';
import { IncidentService } from 'src/app/services/incident/incident.service';
import { SafetydocService } from 'src/app/services/safetydoc/safetydoc.service';

export type PieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  drafts = 0;
  submitted = 0;
  dispatched = 0;
  denied = 0;

  docsDrafts = 0;
  docsCanceled = 0;
  showFiller = false;
  allIncidents: Array<Incident>;
  allSafetydocs: Array<Safetydoc>;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  //pie chart
  @ViewChild("piechart") piechart: ChartComponent;
  public piechartOptions: Partial<PieChartOptions>;

  constructor(private incidentsService: IncidentService, private safetydocService: SafetydocService) {
    //piechart
    this.piechartOptions = {
      series: [44, 55, 13],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["WP", "WR", "SD"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    //standard chart
    this.chartOptions = {
      series: [
        {
          name: "Planned incident",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Unplanned incident",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }

  ngOnInit(){
    this.incidentsService.loadIncidents().subscribe(
      res => {
        this.allIncidents = res;
        this.allIncidents.forEach(element => {
          if(element.status == "Draft"){
            this.drafts += 1;
          } else if (element.status == "Submitted"){
            this.submitted += 1;
          } else if (element.status == "Dispatched"){
            this.dispatched += 1;
          } else if (element.status == "Denied"){
            this.denied += 1;
          }
        });
      }
    )

    this.safetydocService.loadSafetydocs().subscribe(
      res => {
        this.allSafetydocs = res;
        this.allSafetydocs.forEach(element => {
          if(element.status == "Draft"){
            this.docsDrafts += 1;
          }
        });
      }
    )
  }

  public generateData(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  

}

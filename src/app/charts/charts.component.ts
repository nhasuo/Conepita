import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  dataNumber: number[] = new Array();
  Spd: number[] = new Array();
  Brk: number[] = new Array();
  Acc: number[] = new Array();
  G: number[] = new Array();

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getSampleData().subscribe((res) => {
      for (let i = 1; i <= 200; i++) {
        this.dataNumber.push(i);
        const dataNumber: string = this.numberToString(i);
        this.Spd.push(
          Number(res.data[`zahyo_detail_${dataNumber}`][`speed_${dataNumber}`])
        );
        this.Brk.push(
          Number(
            // res.data[`zahyo_detail_${dataNumber}`][`brakeopA_${dataNumber}`]
            Math.sqrt(i)
          )
        );
        this.G.push(
          Number(
            res.data[`zahyo_detail_${dataNumber}`][`accelcalc_${dataNumber}`]
          )
        );
        this.Acc.push(
          // Number(res.data[`zahyo_detail_${dataNumber}`][`accelX_${dataNumber}`])
          Math.cbrt(i) * i
        );
      }
      console.log(this.Spd);
      console.log(this.Brk); //これは適当に値を入れた
      console.log(this.Acc); //これも適当に入れた
      console.log(this.G);
      console.log(this.dataNumber);
    });
  }

  numberToString(dataNumber: number): string {
    let strDataNumber = String(dataNumber);
    if (strDataNumber.length === 1) {
      strDataNumber = '00' + strDataNumber;
    } else if (strDataNumber.length == 2) {
      strDataNumber = '0' + strDataNumber;
    }
    return strDataNumber;
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: this.Spd,
        label: 'Spd',
        yAxisID: 'y-axis-0',
        backgroundColor: 'rgba(148,159,177,0)',
        borderColor: 'rgba(171,207,0,1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(148,159,177,0)',
        pointBorderColor: 'rgba(148,159,177,0)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: this.Brk,
        label: 'Brk',
        yAxisID: 'y-axis-1',
        backgroundColor: 'rgba(0,0,225,0)',
        borderColor: 'rgba(0,0,225,1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(0,0,225,0)',
        pointBorderColor: 'rgba(0,0,225,0)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
      {
        data: this.Acc,
        label: 'Acc',
        yAxisID: 'y-axis-2',
        backgroundColor: 'rgba(255,0,0,0)',
        borderColor: 'rgba(255,0,0,1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(255,0,0,0)',
        pointBorderColor: 'rgba(255,0,0,0)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: this.G,
        label: 'G',
        yAxisID: 'y-axis-3',
        backgroundColor: 'rgba(238,206,14,0)',
        borderColor: 'rgba(255,182,0, 1)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(238,206,14,0)',
        pointBorderColor: 'rgba(238,206,14,0)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: this.dataNumber,
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    maintainAspectRatio: false,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      'y-axis-0': {
        grid: {
          display: false,
          borderWidth: 0,
        },
        ticks: {
          display: false,
        },
      },
      'y-axis-1': {
        grid: {
          display: true,
          borderWidth: 0,
        },
        ticks: {
          display: false,
        },
      },
      'y-axis-2': {
        grid: {
          display: false,
          borderWidth: 0,
        },
        ticks: {
          display: false,
        },
      },
      'y-axis-3': {
        grid: {
          display: false,
          borderWidth: 0,
        },
        ticks: {
          display: false,
        },
      },
      xAxes: {
        grid: {
          display: false,
          borderWidth: 0,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: {}[];
  }): void {
    console.log(event, active);
  }
}

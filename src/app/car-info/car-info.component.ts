import { Component, OnInit } from '@angular/core';
import { sampleData } from '../shared/sampleData';
import { FormControl } from '@angular/forms';
import { DisplayComponent } from '../display/display.component';
import { async } from 'rxjs';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
})
export class CarInfoComponent implements OnInit {
  steering!: number;
  headlamp!: number;
  stoplamp!: number;
  pcs1!: number;
  pcs2!: number;
  turnlamp!: number;
  dataNumber!: number | string;

  constructor(private displayComponent: DisplayComponent) {}

  ngOnInit(): void {
    this.getNumber();
    this.getCarInfo();
  }

  //res = this.dataNumberでは受け取れなかった
  async getNumber() {
    this.displayComponent.setNumber().subscribe((res) => {
      this.dataNumber = res;
    });
  }

  getCarInfo() {
    this.displayComponent.setCarInfo().subscribe((res) => {
      this.steering = Number(res[`steering_${this.dataNumber}`]);
      this.headlamp = Number(res[`headlamp_${this.dataNumber}`]);
      this.stoplamp = Number(res[`stoplamp_${this.dataNumber}`]);
      this.turnlamp = Number(res[`turnlamp_${this.dataNumber}`]);
      this.pcs1 = Number(res[`pcs1_${this.dataNumber}`]);
      this.pcs2 = Number(res[`pcs2_${this.dataNumber}`]);
    });
  }
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { sampleData } from '../shared/sampleData';
import { FormControl } from '@angular/forms';
import { DisplayComponent } from '../display/display.component';
import { DataService } from '../service/data.service';
import { async } from 'rxjs';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
})
export class CarInfoComponent implements OnInit {
  dataNumber!: number | string;
  carInfo!: any;
  steering!: number;
  headlamp!: number;
  stoplamp!: number;
  pcs1!: number;
  pcs2!: number;
  turnlamp!: number;

  constructor(private dataService: DataService, private cd: ChangeDetectorRef) {
    this.getNumber();
    this.getCarInfo();
  }

  ngOnInit(): void {
    this.dataService.addTen().subscribe((res) => {
      console.log('add');
      this.carInfo = res;
    });
  }

  //res = this.dataNumberでは受け取れなかった
  getNumber() {
    this.dataService.setNumber().subscribe((res) => {
      this.dataNumber = res;
    });
  }

  getCarInfo() {
    this.dataService.setCarInfo().subscribe((res) => {
      this.insertCarInfo(res);
    });
  }

  insertCarInfo(res: any): void {
    this.steering = Number(res[`steering_${this.dataNumber}`]);
    this.headlamp = Number(res[`headlamp_${this.dataNumber}`]);
    this.stoplamp = Number(res[`stoplamp_${this.dataNumber}`]);
    this.turnlamp = Number(res[`turnlamp_${this.dataNumber}`]);
    this.pcs1 = Number(res[`pcs1_${this.dataNumber}`]);
    this.pcs2 = Number(res[`pcs2_${this.dataNumber}`]);
  }

  RenewCarInfo(): void {
    this.cd.detectChanges();
    this.getNumber();
    this.dataService.addTen().subscribe((res) => {
      this.insertCarInfo(res);
      console.log(res);
    });
  }
}

import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {
    this.setCarInfo;
    console.log(this.headlampState);
  }
  @Input() steering!: number;
  @Input() headlamp!: number;
  @Input() stoplamp!: number;
  @Input() turnlamp!: number;
  @Input() pcs1!: number;
  @Input() pcs2!: number;

  headlampState!: string;

  setCarInfo() {
    if (this.headlamp === 0) {
      this.headlampState = '消灯';
      console.log(this.headlampState);
    } else if (this.headlamp === 1) {
      this.headlampState = 'LO点灯';
    } else if (this.headlamp === 2) {
      this.headlampState = 'Hi点灯';
    }
  }
}

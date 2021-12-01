import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonService } from '../service/common.service';
import { CarInfoComponent } from '../car-info/car-info.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  constructor(
    private commonService: CommonService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService.addTen().subscribe((res) => {
      this.carInfo = res;
    });
  }

  sampleData?: any;
  lat!: number;
  lng!: number;
  ipArray!: string[];
  center!: google.maps.LatLngLiteral;
  carInfo: any;
  dataNumber: number | string = 101;
  zahyo_telema: string = 'zahyo_telema_';
  zahyo_detail: string = 'zahyo_detail_';
  zahyo_T: string = '';
  zahyo_D: string = '';
}

import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getSmaple();
  }

  sampleData?: JSON;
  lat!: number;
  lng!: number;
  ipArray!: string[];
  center!: google.maps.LatLngLiteral;
  carInfo: any;
  dataNumber: number | string = 101;
  zahyo_telema: string = 'zahyo_telema_';
  zahyo_detail: string = 'zahyo_detail_';

  getSmaple(): void {
    this.commonService.getSampleData().subscribe((data) => {
      this.numberToString(this.dataNumber);
      this.zahyo_telema = this.zahyo_telema + this.dataNumber;
      this.zahyo_detail = this.zahyo_detail + this.dataNumber;
      this.ipArray = data.data[this.zahyo_telema].split(',');
      this.lat = Number(this.ipArray[0]);
      this.lng = Number(this.ipArray[1]);
      this.center = {
        lat: this.lat,
        lng: this.lng,
      };
      this.carInfo = data.data[this.zahyo_detail];
      this.sampleData = data;
    });
  }

  //数字を文字列化と桁数を揃える
  numberToString(dataNumber: number | string): void {
    this.dataNumber = String(dataNumber);
    if (this.dataNumber.length === 1) {
      this.dataNumber = '00' + this.dataNumber;
    } else if (this.dataNumber.length == 2) {
      this.dataNumber = '0' + this.dataNumber;
    }
  }

  setLocation(): Observable<any> {
    return of(this.center);
  }

  setCarInfo(): Observable<any> {
    return of(this.carInfo);
  }

  setNumber(): Observable<number | string> {
    return of(this.dataNumber);
  }
}

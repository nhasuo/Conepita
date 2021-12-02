import { Injectable } from '@angular/core';
import { CommonService } from './common.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private commonService: CommonService) {}

  lat!: number;
  lng!: number;
  ipArray!: string[];
  center!: google.maps.LatLngLiteral;
  carInfo: any;
  dataNumber: number | string = 101;

  //今回は毎回Http通信しているみたいになってしまった。
  //実際はInterfaceを作って"as keyof"をつけてオブジェクトのキーとすれば毎回通信しなくてもよい
  //あと全部フィールドの変数に入れなくてもいいかも。
  setLocation(): Observable<any> {
    this.commonService.getSampleData().subscribe((res) => {
      this.numberToString(this.dataNumber);
      const zahyo_T = 'zahyo_telema_' + this.dataNumber;
      this.ipArray = res.data[zahyo_T].split(',');
      this.lat = Number(this.ipArray[0]);
      this.lng = Number(this.ipArray[1]);
      this.center = {
        lat: this.lat,
        lng: this.lng,
      };
    });
    return of(this.center);
  }

  setCarInfo(): Observable<any> {
    this.commonService.getSampleData().subscribe((res) => {
      this.numberToString(this.dataNumber);
      const zahyo_D = 'zahyo_detail_' + this.dataNumber;
      this.carInfo = res.data[zahyo_D];
    });
    return of(this.carInfo);
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

  setNumber(): Observable<number | string> {
    return of(this.dataNumber);
  }

  addTen(): Observable<any> {
    this.commonService.getSampleData().subscribe((res) => {
      this.dataNumber = Number(this.dataNumber);
      this.dataNumber = this.dataNumber + 10;
      this.numberToString(this.dataNumber);
      //fieldの値を更新する
      const zahyo_D = 'zahyo_detail_' + this.dataNumber;
      this.carInfo = res.data[zahyo_D];
      console.log(zahyo_D);
      console.log(this.carInfo);
    });
    return of(this.carInfo);
  }

  //   addTen(): Observable<any> {
  //     this.commonService.getSampleData().subscribe((res) => {
  //       this.dataNumber = Number(this.dataNumber);
  //       this.dataNumber = this.dataNumber + 10;
  //       this.numberToString(this.dataNumber);
  //       //fieldの値を更新する
  //       const zahyo_D = 'zahyo_detail_' + this.dataNumber;
  //       this.carInfo = res.data[zahyo_D];
  //       console.log(zahyo_D);
  //       console.log(this.carInfo);
  //     });
  //     return of(this.carInfo);
  //   }
}

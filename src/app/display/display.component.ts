import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getSampleData().subscribe((res) => {
      this.setHeader(res);
      console.log(this.hassei_time);
      console.log(this.hassei_zahyo);
      this.numberToString(this.dataNumber);
      const zahyo_T = 'zahyo_telema_' + this.dataNumber;
      this.ipArray = res.data[zahyo_T].split(',');
      this.setLocation(this.ipArray);
      const zahyo_D = 'zahyo_detail_' + this.dataNumber;
      this.carInfo = res.data[zahyo_D];
      this.setCarInfo(this.carInfo);
      console.log(this.steering);
      console.log(this.carInfo);
    });
  }

  sampleData?: any;
  dataNumber: number | string = 101;
  dispalyTime: string = '0秒前';
  //値取得のためのキー（constにして、変数の中に格納してもいいかも？）
  zahyo_telema: string = 'zahyo_telema_';
  zahyo_detail: string = 'zahyo_detail_';
  zahyo_T: string = '';
  zahyo_D: string = '';
  ipArray!: string[];
  //　位置情報
  center!: google.maps.LatLngLiteral;
  lat!: number;
  lng!: number;
  //　車情報関係
  carInfo: any;
  steering!: number;
  headlamp!: number;
  stoplamp!: number;
  pcs1!: number;
  pcs2!: number;
  turnlamp!: number;
  // 証券番号
  vin!: string;
  // 発生時間表示
  hassei_time!: string;
  hassei_zahyo!: google.maps.LatLngLiteral;

  //プログレスバー設定
  progress: number = (101 / 200) * 100;
  color: ThemePalette = 'primary';
  mode: any = 'determinate';

  changeProgressBar(dataNumber: number) {
    this.progress = (dataNumber / 200) * 100;
  }
  // dataNumberを三桁にする関数
  numberToString(dataNumber: number | string): void {
    this.dataNumber = String(dataNumber);
    if (this.dataNumber.length === 1) {
      this.dataNumber = '00' + this.dataNumber;
    } else if (this.dataNumber.length == 2) {
      this.dataNumber = '0' + this.dataNumber;
    }
  }

  cahnageTime(dataNumber: number): void {
    const diff = (dataNumber - 101) / 10;
    if (diff <= 0) {
      this.dispalyTime = `${Math.abs(diff)}秒前`;
    } else {
      this.dispalyTime = `${diff}秒後`;
    }
  }
  //headerに渡すデータの処理
  setHeader(res: any) {
    this.vin = res.vin;
    this.hassei_time = res.data.hassei_time;
    const zahyo_0 = res.data.zahyo_0;
    const lat: number = Number(zahyo_0.split(',')[0]);
    const lng: number = Number(zahyo_0.split(',')[1]);
    this.hassei_zahyo = {
      lat: lat,
      lng: lng,
    };
  }

  // 車・位置情報をプロパティに格納する関数
  setCarInfo(res: any): void {
    this.steering = Number(res[`steering_${this.dataNumber}`]);
    this.headlamp = Number(res[`headlamp_${this.dataNumber}`]);
    this.stoplamp = Number(res[`stoplamp_${this.dataNumber}`]);
    this.turnlamp = Number(res[`turnlamp_${this.dataNumber}`]);
    this.pcs1 = Number(res[`pcs1_${this.dataNumber}`]);
    this.pcs2 = Number(res[`pcs2_${this.dataNumber}`]);
  }
  setLocation(ipArray: string[]): void {
    this.lat = Number(ipArray[0]);
    this.lng = Number(ipArray[1]);
    this.center = {
      lat: this.lat,
      lng: this.lng,
    };
  }

  // 時間を動かす関数
  addTen(): void {
    this.commonService.getSampleData().subscribe((res) => {
      this.dataNumber = Number(this.dataNumber);
      if (this.dataNumber <= 190) {
        this.dataNumber = this.dataNumber + 10;
        this.cahnageTime(this.dataNumber);
        this.changeProgressBar(this.dataNumber);
        this.numberToString(this.dataNumber);
        //位置情報を更新
        const zahyo_T = 'zahyo_telema_' + this.dataNumber;
        this.ipArray = res.data[zahyo_T].split(',');
        this.setLocation(this.ipArray);
        //車情報を更新
        const zahyo_D = 'zahyo_detail_' + this.dataNumber;
        this.carInfo = res.data[zahyo_D];
        this.setCarInfo(this.carInfo);
        console.log(this.dataNumber);
        console.log(zahyo_D);
        console.log(this.carInfo);
      }
    });
  }
  addOne(): void {
    this.commonService.getSampleData().subscribe((res) => {
      this.dataNumber = Number(this.dataNumber);
      if (this.dataNumber <= 199) {
        this.dataNumber = this.dataNumber + 1;
        this.cahnageTime(this.dataNumber);
        this.changeProgressBar(this.dataNumber);
        this.numberToString(this.dataNumber);
        //位置情報を更新
        const zahyo_T = 'zahyo_telema_' + this.dataNumber;
        this.ipArray = res.data[zahyo_T].split(',');
        this.setLocation(this.ipArray);
        //車情報を更新
        const zahyo_D = 'zahyo_detail_' + this.dataNumber;
        this.carInfo = res.data[zahyo_D];
        this.setCarInfo(this.carInfo);
        console.log(zahyo_D);
        console.log(this.carInfo);
      }
    });
  }
  substractTen(): void {
    this.commonService.getSampleData().subscribe((res) => {
      this.dataNumber = Number(this.dataNumber);
      if (this.dataNumber >= 10) {
        this.dataNumber = this.dataNumber - 10;
        this.cahnageTime(this.dataNumber);
        this.changeProgressBar(this.dataNumber);
        this.numberToString(this.dataNumber);
        //位置情報を更新
        const zahyo_T = 'zahyo_telema_' + this.dataNumber;
        this.ipArray = res.data[zahyo_T].split(',');
        this.setLocation(this.ipArray);
        //車情報を更新
        const zahyo_D = 'zahyo_detail_' + this.dataNumber;
        this.carInfo = res.data[zahyo_D];
        this.setCarInfo(this.carInfo);
        console.log(zahyo_D);
        console.log(this.carInfo);
      }
    });
  }
  substractOne(): void {
    this.commonService.getSampleData().subscribe((res) => {
      this.dataNumber = Number(this.dataNumber);
      if (this.dataNumber >= 2) {
        this.dataNumber = this.dataNumber - 1;
        this.cahnageTime(this.dataNumber);
        this.changeProgressBar(this.dataNumber);
        this.numberToString(this.dataNumber);
        //位置情報を更新
        const zahyo_T = 'zahyo_telema_' + this.dataNumber;
        this.ipArray = res.data[zahyo_T].split(',');
        this.setLocation(this.ipArray);
        //車情報を更新
        const zahyo_D = 'zahyo_detail_' + this.dataNumber;
        this.carInfo = res.data[zahyo_D];
        this.setCarInfo(this.carInfo);
        console.log(zahyo_D);
        console.log(this.carInfo);
      }
    });
  }

  mapCheck: boolean = true;
  memoCheck: boolean = true;
  streetViewCheck: boolean = true;
  carInfoCheck: boolean = true;

  mapDisplay() {
    if (this.mapCheck) {
      this.mapCheck = false;
    } else {
      this.mapCheck = true;
    }
  }
  memoDisplay() {
    if (this.memoCheck) {
      this.memoCheck = false;
    } else {
      this.memoCheck = true;
    }
  }
  streetViewDisplay() {
    if (this.streetViewCheck) {
      this.streetViewCheck = false;
    } else {
      this.streetViewCheck = true;
    }
  }
  carInfoDisplay() {
    if (this.carInfoCheck) {
      this.carInfoCheck = false;
    } else {
      this.carInfoCheck = true;
    }
  }

  // displayCheck(check: boolean) {
  //   if (check) {
  //     check = false;
  //   } else {
  //     check = true;
  //   }
  // }
}

import { Component, Input, OnInit } from '@angular/core';
import { sampleData } from '../sampleData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // 証券番号
  @Input() vin!: string;
  @Input() hassei_time!: string;
  @Input() hassei_zahyo!: google.maps.LatLngLiteral;
  year!: string;
  month!: string;
  day!: string;
  hour!: string;
  min!: string;
  second!: string;
  location?: string;

  constructor() {}
  ngOnInit(): void {
    this.getTimeInfo(this.hassei_time);
    this.getLocation();
  }

  // 発生時間表示
  getTimeInfo(hassei_time: string) {
    this.year = this.hassei_time.substr(0, 4);
    this.month = this.hassei_time.substr(4, 2);
    this.day = this.hassei_time.substr(6, 2);
    this.hour = this.hassei_time.substr(8, 2);
    this.min = this.hassei_time.substr(10, 2);
    this.second = this.hassei_time.substr(12, 2);
  }

  //　発生場所
  zahyoIp: string = sampleData.data.zahyo_0;
  zahyoIpArray: string[] = this.zahyoIp.split(',');

  // 住所取得
  getLocation() {
    const geocoder = new google.maps.Geocoder();
    const result: any = geocoder
      .geocode({ location: this.hassei_zahyo })
      .then((response) => {
        this.location = response.results[0].formatted_address.substr(13);
      })
      .catch((e) => {
        console.log('Geocoder failed due to: ' + e);
      });
  }

  // zahyoip: string = sampleData.data.zahyo_0;
  // zahyoipArray: string[] = this.zahyoip.split(',');
  // lat: number = parseFloat(this.zahyoipArray[0]);
  // lng: number = parseFloat(this.zahyoipArray[1]);

  // latlng = {
  //   lat: this.lat,
  //   lng: this.lng,
  // };
  // geocoder = new google.maps.Geocoder();
  // result: any = this.geocoder
  //   .geocode({ location: this.hassei_zahyo })
  //   .then((response) => {
  //     this.location = response.results[0].formatted_address.substr(13);
  //   })
  //   .catch((e) => {
  //     console.log('Geocoder failed due to: ' + e);
  //   });
}

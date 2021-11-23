import { Component, OnInit } from '@angular/core';
import { sampleData } from '../sampleData';
import { MapService } from '../../service/map.service';
import { async } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private mapService: MapService) {}
  ngOnInit(): void {}

  // 証券番号
  vin: string = sampleData.vin;

  // 発生時間表示
  hassei_time: string = sampleData.data.hassei_time;
  year: string = this.hassei_time.substr(0, 4);
  month: string = this.hassei_time.substr(4, 2);
  day: string = this.hassei_time.substr(6, 2);
  hour: string = this.hassei_time.substr(8, 2);
  min: string = this.hassei_time.substr(10, 2);
  second: string = this.hassei_time.substr(12, 2);

  //　発生場所
  zahyoIp: string = sampleData.data.zahyo_0;
  zahyoIpArray: string[] = this.zahyoIp.split(',');

  // 住所取得
  zahyoip: string = sampleData.data.zahyo_0;
  zahyoipArray: string[] = this.zahyoip.split(',');
  lat: number = parseFloat(this.zahyoipArray[0]);
  lng: number = parseFloat(this.zahyoipArray[1]);
  location?: string;

  latlng = {
    lat: this.lat,
    lng: this.lng,
  };
  geocoder = new google.maps.Geocoder();
  result: any = this.geocoder
    .geocode({ location: this.latlng })
    .then((response) => {
      this.location = response.results[0].formatted_address.substr(13);
    })
    .catch((e) => {
      console.log('Geocoder failed due to: ' + e);
    });
}

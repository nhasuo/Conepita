import { Component, OnInit } from '@angular/core';
import { sampleData } from '../shared/sampleData';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  // 初期位置(initial position)
  zahyoIp: string = sampleData.data.zahyo_0;
  zahyoIpArray: string[] = this.zahyoIp.split(',');

  zahyo?: string[];

  constructor() {}

  ngOnInit(): void {}

  zoom = 16;
  center: google.maps.LatLngLiteral = {
    lat: Number(this.zahyoIpArray[0]),
    lng: Number(this.zahyoIpArray[1]),
  };
  // 地図のオプション
  mapOptions: google.maps.MapOptions = {
    disableDefaultUI: true,
    center: this.center,
  };
  // markerの位置
  marker = {
    position: this.center,
  };
}

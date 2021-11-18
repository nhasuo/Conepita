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
  // 東新宿駅の座標
  center: google.maps.LatLngLiteral = {
    lat: Number(this.zahyoIpArray[0]),
    lng: Number(this.zahyoIpArray[1]),
  };
  // 地図のオプション
  options: google.maps.MapOptions = {
    disableDefaultUI: true,
  };
  // markerの位置
  marker = {
    position: {
      lat: Number(this.zahyoIpArray[0]),
      lng: Number(this.zahyoIpArray[1]),
    },
  };
}

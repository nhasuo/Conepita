import { Component, OnInit } from '@angular/core';
import { sampleData } from '../shared/sampleData';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  zoom = 16;
  // 東新宿駅の座標
  center: google.maps.LatLngLiteral = {
    lat: 35.697695,
    lng: 139.707354
  };
  // 地図のオプション
  options: google.maps.MapOptions = {
    disableDefaultUI: true
  };

}

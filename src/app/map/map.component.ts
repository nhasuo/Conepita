import { Component, Input, OnInit } from '@angular/core';
import { sampleData } from '../shared/sampleData';
import { DisplayComponent } from '../display/display.component';
import { async, Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  center!: google.maps.LatLngLiteral;
  mapOptions!: google.maps.MapOptions;
  marker!: any;

  constructor(private displayComponent: DisplayComponent) {}

  ngOnInit(): void {
    this.setLocation();
    // 地図のオプション
    this.mapOptions = {
      disableDefaultUI: true,
      center: this.center,
    };
    // markerの位置
    this.marker = {
      position: this.center,
    };
  }

  setLocation(): void {
    this.displayComponent.setLocation().subscribe((res) => {
      this.center = res;
    });
  }

  // // 初期位置(initial position)
  // zahyoIp: string = sampleData.data.zahyo_0;
  // zahyoIpArray: string[] = this.zahyoIp.split(',');

  // zahyo?: string[];

  // zoom = 16;
  // center: google.maps.LatLngLiteral = {
  //   lat: Number(this.zahyoIpArray[0]),
  //   lng: Number(this.zahyoIpArray[1]),
  // };
  // // 地図のオプション
  // mapOptions: google.maps.MapOptions = {
  //   disableDefaultUI: true,
  //   center: this.center,
  // };
  // // markerの位置
  // marker = {
  //   position: this.center,
  // };
}

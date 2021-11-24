import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from '../shared/sampleData';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-streerview',
  templateUrl: './streerview.component.html',
  styleUrls: ['./streerview.component.scss'],
})
export class StreerviewComponent implements OnInit {
  zahyoIp: string = sampleData.data.zahyo_0;
  zahyoIpArray: string[] = this.zahyoIp.split(',');

  constructor() {}

  ngOnInit(): void {}

  zoom = 16;
  center: google.maps.LatLngLiteral = {
    lat: Number(this.zahyoIpArray[0]),
    lng: Number(this.zahyoIpArray[1]),
  };
  // 地図のオプション
  options: google.maps.MapOptions = {
    disableDefaultUI: true,
  };

  @ViewChild(GoogleMap) map!: GoogleMap;

  ngAfterViewInit() {
    const streetView = this.map.getStreetView();

    streetView.setOptions({
      position: {
        lat: Number(this.zahyoIpArray[0]),
        lng: Number(this.zahyoIpArray[1]),
      },
      pov: { heading: 70, pitch: -10 },
    });

    streetView.setVisible(true);
  }
}

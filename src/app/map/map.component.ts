import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { async, Observable } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  // center!: google.maps.LatLngLiteral;
  mapOptions!: google.maps.MapOptions;
  marker!: any;
  @Input() center!: google.maps.LatLngLiteral;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // 地図のオプション
    this.mapOptions = {
      disableDefaultUI: true,
      center: this.center,
      zoom: 20,
    };
    // markerの位置
    this.marker = {
      position: this.center,
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    this.mapOptions = {
      disableDefaultUI: true,
      center: changes.center.currentValue,
      zoom: 20,
    };
    this.marker = {
      position: changes.center.currentValue,
    };
    console.log(changes.center.currentValue);
  }

  setLocation(): void {
    this.dataService.setLocation().subscribe((res) => {
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

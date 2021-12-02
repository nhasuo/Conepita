import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-streerview',
  templateUrl: './streerview.component.html',
  styleUrls: ['./streerview.component.scss'],
})
export class StreerviewComponent implements OnInit {
  @Input() center!: google.maps.LatLngLiteral;

  constructor() {}

  ngOnInit(): void {}

  streetView: any;
  zoom = 16;

  // 地図のオプション
  options: google.maps.MapOptions = {
    disableDefaultUI: true,
    zoom: 18,
  };

  @ViewChild(GoogleMap) map!: GoogleMap;

  ngAfterViewInit() {
    this.streetView = this.map.getStreetView();
    this.streetView.setOptions({
      position: this.center,
      pov: { heading: 70, pitch: -10 },
    });
    this.streetView.setVisible(true);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.streetView.setOptions({
      position: changes.center.currentValue,
      pov: { heading: 70, pitch: -10 },
    });
    this.streetView.setVisible(true);
    console.log(changes.center.currentValue);
  }
}

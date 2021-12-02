import { Component, OnInit } from '@angular/core';
import { DisplayComponent } from '../../display/display.component';
import { CarInfoComponent } from '../../car-info/car-info.component';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-timebar',
  templateUrl: './timebar.component.html',
  styleUrls: ['./timebar.component.scss'],
})
export class TimebarComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  nextA() {
    this.dataService.addTen();
  }
}

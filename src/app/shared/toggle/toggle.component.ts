import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
//ボタンは4個
//その下に保存ボタン
//トグルは5個
//トグルの下にボタン2個
//その下にトグル一個

//トグルはチェックドで判別できるのかな？？

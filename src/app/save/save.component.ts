import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {
  @Input() saveCheck!: boolean;
  @Output() hideSave = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendData():void{
    this.saveCheck = false;
    this.hideSave.emit(this.saveCheck);
    //ここでデータベースに保存する処理
    window.alert("保存が完了しました")
  }
  valid():void{
    this.saveCheck = false;
    this.hideSave.emit(this.saveCheck);
  }

}

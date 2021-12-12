import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.scss'],
})
export class MemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public memo!: string;
  memos: string[] = [];

  register(message: string) {
    this.memos.push(message);
    console.log(this.memos);
  }
}

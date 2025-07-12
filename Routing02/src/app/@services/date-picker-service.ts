import { Page01 } from './../../../../MatStudy/src/app/page/page01/page01';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatePickerService {
  pToday!: any;
  pDate!: string;
  year!: number;
  mouth!: any;
  day!: any;

  // PageToSrevice 是讓 page傳過來給 service使用的全域變數
  PageToSrevice!: any;

  constructor() { }


  ngOnInit(): void {

  }


  dateService() {
    // 導入 page傳過來的值
    this.pToday = this.PageToSrevice

    this.year = this.pToday.getFullYear()
    this.mouth = this.pToday.getMonth()
    this.day = this.pToday.getDate()

    // 月&日 因為起始值是0 所以要加1
    // 為了跟 日期選擇器的格式相同 MM-DD 小於10前面要補 0
    if ((this.mouth + 1) < 10) {
      this.mouth = "0" + (this.mouth + 1)
    }
    if ((this.day + 1) < 10) {
      this.day = "0" + this.day
    }
    this.pDate = this.year + '-' + this.mouth + '-' + this.day

    // return this.pDate;

  }




}

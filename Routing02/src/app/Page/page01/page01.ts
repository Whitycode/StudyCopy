import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerService } from './../../@services/date-picker-service';



@Component({
  selector: 'app-page01',
  imports: [
    FormsModule
  ],
  templateUrl: './page01.html',
  styleUrl: './page01.scss'
})
export class Page01 {


  today = new Date("2025-07-07")

  newPicker!:string;



  constructor(private DPservice:
    DatePickerService
  ) { }

  ngOnInit(): void {
    console.log("原始的時間格式", this.today);
    // 將 page01的資料導入 service的全域變數中
    // 在 page開啟 service的函式
    // 再從 service 傳資料回 page01
    this.DPservice.PageToSrevice = this.today;
    this.DPservice.dateService();

    // 要先運行函式 不然會傳undefined
    console.log(this.DPservice.pDate);
  }





}

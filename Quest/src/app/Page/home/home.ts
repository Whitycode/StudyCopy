import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerService } from '../../@service/date-picker-service';


@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  setDate = new Date("2025-07-18") ;

  startDate: string = "";
  endDate: string = "";

  constructor(private DPservice: DatePickerService) { }


  sendDate() {
    this.DPservice.PageToSrevice = this.startDate;
    // 先運行 外掛元件 DPservice 的函式 再傳送日期
    this.DPservice.dateService();
    console.log("起始日期：", this.DPservice.pageDate);

    this.DPservice.PageToSrevice = this.endDate;
    this.DPservice.dateService();
    console.log("結束日期：", this.DPservice.pageDate);
  }

  ngOnInit(): void {

    console.log("原始的時間樣式", this.setDate);

    this.DPservice.PageToSrevice = this.setDate;
    // 先運行 外掛元件 DPservice 的函式
    this.DPservice.dateService();
    // 我有補充 格式修正 MM-DD
    console.log(this.DPservice.year);
    console.log(this.DPservice.mouth);
    console.log(this.DPservice.day);

    console.log(this.DPservice.pageDate);
    console.log(new Date(this.DPservice.pageDate));
  }

}

import { Teleport } from './../../@service/teleport';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [
    FormsModule
  ],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {

  userName!: string;
  userPhone!: string;
  userEmail!: string;





  // 輸入框事件
  userInput: string = '';

  // 選項事件
  RadioClick!: string;
  // 複選事件
  CheckDone = false;
  CheckDone3 = false;
  // 陣列要定義好裡面內容的類型
  CheckJson: string[] = [];

  // 說明欄測試
  QusetTest = "這邊是問卷的說明欄測試";

  // service 建構式
  constructor(private Teleport: Teleport) { }

  inputText() {
    // console.log(this.userInput);
  }

  //用戶資料傳送 service
  TestName() {
    console.log(this.userName);
    this.Teleport.userName = this.userName;
    this.Teleport.userPhone = this.userPhone;
    this.Teleport.userEmail = this.userEmail;
  }

  SeandJSON() {
    //用戶資料傳送 service
    this.Teleport.userName = this.userName;
    this.Teleport.userPhone = this.userPhone;
    this.Teleport.userEmail = this.userEmail;



    console.log("傳給JSON", this.userInput);

    // 歸零龜苓膏 使用者輸入框沒有值不做動作
    if (this.userInput !== '') {
      this.Teleport.userInput = this.userInput;
      this.CheckJson.push(this.userInput);
    }



    // 選項事件判斷
    if (this.RadioClick) {
      console.log("Radio選項", this.RadioClick);
      console.log(this.RadioClick);
      this.CheckJson.push(this.RadioClick);
    } else {
      console.log("Radio沒有選");
    }

    console.log(this.CheckJson);
    // 複選事件判斷
    if (this.CheckDone3) {
      console.log("value:", this.CBValue);
      this.CheckJson.push(this.CBValue);

      console.log(this.CheckJson);
      // 資料確認送出後 之後要記得清空JSON
    } else {
      console.log("CheckBox沒有勾選");
    }

    console.log(this.CheckJson);
  }

  ClearJSON() {
    this.CheckJson = [];
  }





  CBValue = "C3";

  // CheckTest() {
  //   if (this.CheckDone3) {
  //     console.log("value:", this.CBValue);
  //     this.CheckJson.push(this.CBValue);
  //     console.log(this.CheckJson);
  //     // 資料確認送出後 之後要記得清空JSON
  //   } else {
  //     console.log("CheckBox沒有勾選");
  //   }
  // }





























  // ChangeSelect(){
  //   // this.RadioClick = true;
  //   console.log(this.RadioClick);
  //   if(this.RadioClick){
  //     console.log(this.RadioClick);
  //   }
  // }


  ngOnInit(): void {
    console.log(this.userInput);
  }
}

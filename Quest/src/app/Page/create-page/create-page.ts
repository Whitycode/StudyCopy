import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-create-page',
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  templateUrl: './create-page.html',
  styleUrl: './create-page.scss'
})
export class CreatePage {

  // button
  null = 0;
  buttons: string[] = [];
  buttonName = "我是新按鈕";

  addButton() {
    this.buttons.push('新按鈕');
  }




  // input
  NoteInt = "問題說明";


  // userInput!: string;

  // 設定起始input位置的值
  // InputAdd 塞入一個空值 讓它形成一個新的 Input
  inputValue = 0;
  InputAdd: string[] = [];

  // 拿來擺放 Input 的陣列
  Inputs: number[] = [];
  NewInputName = "< 輸入問題";
  // 提供使用者輸入問題的地方 還沒設定完預設名稱
  userIntName: string[] = [];
  userRadioName: string[] = [];


  // 複選題 Radio變數
  RadioValue = 0;     //抓 Radio 位置用的
  RadioAdd: string[] = [];
  Radios: number[] = [];

  RadioV = 3;           // 使選項的 Value不同 我有預設 2個了 所以這邊起始為3



  addInput() {
    // 問題附加說明 HTML 使用 placeholder="題目名稱"
    // 跳過 [(ngModel)] 跟 Value 衝突的問題
    // 之後看看這裡的數值有沒有需要1開始算
    this.Inputs.push(this.inputValue);
    // 建立一個新的input
    this.InputAdd.push('');
    console.log(this.inputValue);
    console.log(this.Inputs);

    // 先再推進 JSON中 再+1
    this.inputValue = this.inputValue + 1;
  }

  RadioQuestions: {
    name: string;
    options: any[];     // 多個選項文字
    value: string;
  }[] = [];

  // 新建整個單選題
  addRadio() {
    this.RadioQuestions.push({
      name: '',
      // options 如果變多了的話可能預設值要更改 不然唯一值會衝到
      options: ['預設1', '預設2'],   // 預設 單選題中有兩個選項
      value: ""          // 這是要讓 value 預設為空值嗎?
    });
  }
  // 單選題 新增選項
  // 要建立一個空的輸入框 壤使用者輸入選項名稱
  addOption(questIndex: number) {

    console.log("Value目前為", this.RadioV)
    console.log(this.RadioQuestions[questIndex].options);
    this.RadioQuestions[questIndex].options.push("預設" + this.RadioV); //這裡要用 + 不然,會一次推兩個選項
    this.RadioV = this.RadioV + 1   // 第一次跑完 預設3 後面就是 4 5 6
    console.log(this.RadioQuestions[questIndex].options);
  }




  deleteOption(questIndex: number, optionIndex: number) {
    this.RadioQuestions[questIndex].options.splice(optionIndex, 1);
  }



  // 刪除按鈕 Input
  DeleteInt(index: number) {
    console.log(this.inputValue);
    this.userIntName.splice(index, 1);
    this.InputAdd.splice(index, 1);
    this.Inputs.splice(index, 1);
  }

  DeleteRdQuest(index: number){

    this.RadioQuestions.splice(index, 1);
  }

  DeleteRad(index: number) {
    console.log(this.RadioValue);
    // this.userIntName.splice(index, 1);
    this.RadioAdd.splice(index, 1);
    this.Radios.splice(index, 1);
  }



  // 用戶確認按鍵
  userCheck() {

  }












}

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



  // 單選題 Radio變數
  RadioValue = 0;        //抓 Radio 位置用的
  RadioAdd: string[] = [];
  Radios: number[] = []; // 單選題選項不同步所使用的 唯一值變數
  RadioV = 3;            // 使選項的 Value不同 我有預設 2個了 所以這邊起始為3

  // 單選題 選項的 JSON包
  RadioQuestions: {
    name: string;
    options: any[];     // 多個選項文字
    value: string;
  }[] = [];



  // 複選題 Checkbox 變數
  CheckboxValue = 0;          //抓 Checkbox 位置用的
  CheckboxAdd: string[] = [];
  Checkboxs: number[] = [];
  CheckboxV = 3;              // 不同步選項用的唯一值

 // 複選題的 選項的 JSON包
  CheckboxQuestions: {
    name: string;       // 題目名稱
    options: any[];     // 建立選項說明   預設1 預設2...
    value: string[];
    selected: boolean[]; //設定選項初始值 Ture & False
  }[] = [];



  // 問題附加說明 HTML 使用 placeholder="題目名稱"

  // 新建 input
  addInput() {
    this.Inputs.push(this.inputValue);
    // 建立一個新的input
    this.InputAdd.push('');
    console.log(this.inputValue);
    console.log(this.Inputs);

    // 先再推進 JSON中 再+1
    this.inputValue = this.inputValue + 1;
  }
  // 刪除按鈕 Input
  DeleteInt(index: number) {
    console.log(this.inputValue);
    this.userIntName.splice(index, 1);
    this.InputAdd.splice(index, 1);
    this.Inputs.splice(index, 1);
  }





  // 新建整個單選題
  addRadio() {
    this.RadioQuestions.push({
      name: '',
      // options 如果變多了的話可能預設值要更改 不然唯一值會衝到
      options: ['預設1', '預設2'],   // 預設 單選題中有兩個選項名稱
      value: ""          // value 預設為空值
    });
  }
  // 新增 Radio 選項
  // 要建立一個空的輸入框 壤使用者輸入選項名稱
  addOption(questIndex: number) {
    console.log("Value目前為", this.RadioV)
    this.RadioQuestions[questIndex].options.push("預設" + this.RadioV); //這裡要用 + 不然,會一次推兩個選項
    this.RadioV = this.RadioV + 1   // 第一次跑完 預設3 後面就是 4 5 6
    console.log(this.RadioQuestions[questIndex].options);
  }
  // 刪除按鈕 整個 Radio
  DeleteRdQuest(index: number) {
    this.RadioQuestions.splice(index, 1);
  }
  // 刪除 單個 Radio 選項
  DeleteRdOption(questIndex: number, optionIndex: number) {
    this.RadioQuestions[questIndex].options.splice(optionIndex, 1);
  }






  // 新建 Checkbox
  addCheckBox() {
    this.CheckboxQuestions.push({
      name: '',
      options: ['預設1', '預設2'],  // 使用者輸入選項的欄位 填入值才會生成
      value: [],
      selected: [false, false]      // Checkbox 預設的值
    });
  }
  // 新建 Checkbox 選項
  addCheckboxOption(questIndex: number) {

    console.log("CBValue目前為", this.CheckboxV)
    this.CheckboxQuestions[questIndex].options.push("預設" + this.CheckboxV);
    this.CheckboxQuestions[questIndex].selected.push(false); // 同步增加一個布林值
    this.CheckboxV = this.CheckboxV + 1
    console.log(this.CheckboxQuestions[questIndex].options); // 選項JSON
    console.log("預設 boolean為",this.CheckboxQuestions[questIndex].selected); //布林值JSON
  }

  // 刪除整包 Checkbox
  DeleteCbQuest(index: number) {
    this.CheckboxQuestions.splice(index, 1);
  }

  // 刪除 單個 Checkbox 選項
  DeleteCbOption(questIndex: number, optionIndex: number) {
    this.CheckboxQuestions[questIndex].options.splice(optionIndex, 1);
    this.CheckboxQuestions[questIndex].selected.splice(optionIndex, 1);

  }



  // getSelectedOptions(question: { options: string[]; selected: boolean[] }): string[] {
  //   return question.options.filter((opt, i) => question.selected[i]);
  // }




  // 用戶確認按鍵
  userCheck() {

  }








}

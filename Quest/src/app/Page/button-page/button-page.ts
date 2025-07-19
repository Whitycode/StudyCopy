import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-page',
  imports: [
    FormsModule
  ],
  templateUrl: './button-page.html',
  styleUrl: './button-page.scss'
})
export class ButtonPage {


  // 設定一個全總數 不同按鈕個別設定計算後統整
  TotalNumber = 0;
  InputNumber = 0;
  RadioNumber = 0;
  CheckboxNumber = 0;


  // 全域位置先寫JSON樣式的話 他會先讀取內容跑一次迴圈

  // 整理的 精簡 JSON 空包裹
  QuestPage = [
    {
      Title: "問卷名稱",
      QuestID: "QcID0001",
      creatorName: "測試員01",
      QuestList: [
        {
          QuestionNumber: "QNum0",
          QuestTitle: "請輸入任意文字",
          QType: "",
          answer: [
            { value: "", select: "N", boolean: false }
          ]
        }
      ]
    }
  ]


  // // JSON包裹 寫法參考
  // QuestPage = [
  //   {
  //     Title: "問卷名稱",
  //     QuestID: "QcID0001",
  //     creatorName: "測試員01",
  //     QuestList: [
  //       {
  //         QuestionNumber: "QNum01",
  //         QuestTitle: "請輸入任意文字",
  //         QType: 'input',
  //         answer: [
  //           { value: "使用者輸入了這些東東" }
  //         ]
  //       },
  //       {
  //         QuestionNumber: "QNum02",
  //         QuestTitle: "請問你最喜歡的東西是",
  //         QType: 'radio',
  //         answer: [
  //           { value: "狗狗", select: "N", boolean: false },
  //           { value: "貓貓", select: "N", boolean: false },
  //           { value: "爬蟲類", select: "Y", boolean: false }
  //         ]
  //       }
  //     ]
  //   }
  // ]

  answerPage = this.QuestPage[0];


  choseBoxT = [
    {
      QuestTitle: "請輸入任意文字",
      QType: 'input',
      answer: [
        { value: "" }
      ]
    }
  ];


  choseBox: { QType: 'input' | 'radio' | 'checkbox'; Value: any }[] = [];




  addRadioButton() {
    this.choseBox.push({ QType: "radio", Value: + this.RadioNumber });
    this.RadioNumber = this.RadioNumber + 1;
    console.log("Radio", this.RadioNumber);
  }
  addCheckboxButton() {
    this.choseBox.push({ QType: "checkbox", Value: + this.CheckboxNumber });
    this.CheckboxNumber = this.CheckboxNumber + 1;
    console.log("Checkbox", this.CheckboxNumber);
  }

  // 移植項目
  // inputValue = 0;
  // InputAdd: string[] = [];
  // Inputs: number[] = [];
  NewInputName = "x";
  // userIntName: string[] = [];

  // Radios: number[] = [];


  addInput() {
    // this.userIntName.push("");
    this.QuestPage[0].QuestList[0].answer.push({ value: "", select: "N", boolean: false });
    this.InputNumber = this.InputNumber + 1;
    console.log("Int", this.InputNumber);
    console.log(this.QuestPage[0].QuestList[0].answer);
  }

  addRadio() {
    this.QuestPage[0].QuestList[1].answer.push({ value: "", select: "N", boolean: false });
    this.RadioNumber = this.RadioNumber + 1;
    console.log("Radio", this.RadioNumber);
    console.log(this.QuestPage[0].QuestList[1].answer);
  }
  // 我應該要先寫出問題型 再添加答案

  // 創建問題按鈕
  addInputPage() {

    console.log("開始值為", this.InputNumber);
    this.InputNumber = this.TotalNumber;
    this.InputNumber = this.InputNumber + 1;
    this.TotalNumber = this.InputNumber;
    console.log(this.TotalNumber, this.InputNumber);

    this.QuestPage[0].QuestList.push(
      {
        QuestionNumber: "QNum" + this.TotalNumber,
        QuestTitle: "",
        QType: 'input',
        answer: [
          { value: "", select: "N", boolean: false },
        ]
      }
    );
    console.log(this.QuestPage[0].QuestList);
  }

  addRadioPage() {

    console.log("Radio", this.TotalNumber);
    console.log("開始值為", this.RadioNumber);
    this.RadioNumber = this.TotalNumber;
    this.RadioNumber = this.RadioNumber + 1;
    this.TotalNumber = this.RadioNumber;
    console.log(this.TotalNumber, this.RadioNumber);

    this.QuestPage[0].QuestList.push(
      {
        QuestionNumber: "QNum" + this.RadioNumber,
        QuestTitle: "",
        QType: 'radio',
        answer: [
          { value: "", select: "N", boolean: false },
        ]
      }
    );
    console.log(this.QuestPage[0].QuestList);
  }

  addCheckboxPage() {

    console.log("開始值為", this.CheckboxNumber);
    // TotalNumber 是累計所有題目總數
    // 不同類別要同步唯一值 就把累計的補進來
    // 算編碼需要-1 才能同步程式碼 以0做為起點的順序
    this.CheckboxNumber = this.TotalNumber;
    this.CheckboxNumber = this.CheckboxNumber + 1;
    this.TotalNumber = this.CheckboxNumber;
    console.log(this.TotalNumber, this.CheckboxNumber)

    this.QuestPage[0].QuestList.push(
      {
        QuestionNumber: "QNum" + this.TotalNumber,
        QuestTitle: "",
        QType: 'checkbox',
        answer: [
          { value: "", select: "N", boolean: false },
        ]
      }
    );
    console.log(this.QuestPage[0].QuestList);
  }




  DeleteInt(index: number) {
    this.QuestPage[0].QuestList.splice(index, 1);
  }

  DeleteRadio(index: number) {
    // 可能之後要加判斷式
    this.QuestPage[0].QuestList.splice(index, 1);
  }



  ngOnInit(): void {
    console.log(this.QuestPage);
    console.log(this.choseBoxT);
    console.log(this.QuestPage[0].QuestList);

  }







}

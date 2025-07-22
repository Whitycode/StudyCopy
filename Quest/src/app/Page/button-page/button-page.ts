import { Answer, Question, QuestForm } from './../../Interface/interface/interface';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Teleport } from './../../@service/teleport';



@Component({
  selector: 'app-button-page',
  imports: [
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './button-page.html',
  styleUrl: './button-page.scss'
})



export class ButtonPage {

  ImgGirl = "QuestGirl2.png"

  // 設定一個全總數 不同按鈕個別設定計算後統整
  TotalNumber = 0;

  InputNumber = 0;
  RadioNumber = 0;
  CheckboxNumber = 0;

  // 創建者可以變更 姓名等 欄位
  inputText01 = "";
  inputText02 = "";
  inputText03 = "";


  // 全域位置先寫JSON樣式的話 他會先讀取內容跑一次迴圈



  // JSON 精簡 空包裹
  QuestPage: QuestForm[] = [
    {
      CreatorData: [
        {
          QuestID: "",
          Title: "",
          Directions: "",
          CreatorID: "",
          StartTime: "",
          EndTime: ""
        }

      ],
      HelperData: [ // ✅ 這段一定要初始化
        { HelperName: "", HelperPhone: "", HelperEmail: "" }
      ],
      QuestList: []
    }
  ]

  //  // 整理的 精簡 JSON 空包裹
  // QuestPage = [
  //   {
  //     Title: "問卷名稱",
  //     QuestID: "QcID0001",
  //     creatorName: "測試員01",
  //     QuestList: [
  //       {
  //         QuestionNumber: "QNum0",
  //         QuestTitle: "請輸入任意文字",
  //         QType: "",
  //         answer: [
  //           { value: "", select: "N", boolean: false }
  //         ]
  //       }
  //     ]
  //   }
  // ]


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


  constructor(private Teleport: Teleport, private router: Router) { }


  // choseBox: { QType: 'input' | 'radio' | 'checkbox'; Value: any }[] = [];



  // addRadioButton() {
  //   this.choseBox.push({ QType: "radio", Value: + this.RadioNumber });
  //   this.RadioNumber = this.RadioNumber + 1;
  //   console.log("Radio", this.RadioNumber);
  // }
  // addCheckboxButton() {
  //   this.choseBox.push({ QType: "checkbox", Value: + this.CheckboxNumber });
  //   this.CheckboxNumber = this.CheckboxNumber + 1;
  //   console.log("Checkbox", this.CheckboxNumber);
  // }



  // 我應該要先寫出問題型 再添加答案

  // 創建問題按鈕
  addInputPage() {

    console.log("開始值為", this.InputNumber);


    this.Teleport.TotalNumber = this.TotalNumber;
    this.InputNumber = this.TotalNumber;


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

    this.InputNumber += 1;
    this.TotalNumber = this.InputNumber;
    console.log(this.TotalNumber, this.InputNumber);
    this.Teleport.TotalNumber = this.TotalNumber;
    console.log("記數器", this.Teleport.TotalNumber);
  }

  // radio & checkbox 預設給他兩組 所以answer 擺兩個{}
  addRadioPage() {

    console.log("Radio", this.TotalNumber);
    console.log("開始值為", this.RadioNumber);
    this.Teleport.TotalNumber = this.TotalNumber;
    this.RadioNumber = this.TotalNumber;



    this.QuestPage[0].QuestList.push(
      {
        QuestionNumber: "QNum" + this.RadioNumber,
        QuestTitle: "",
        QType: 'radio',
        answer: [
          { value: "", select: "N", boolean: false },
          { value: "", select: "N", boolean: false },
        ]
      }
    );
    console.log(this.QuestPage[0].QuestList);

    this.RadioNumber = this.RadioNumber + 1;
    this.TotalNumber = this.RadioNumber;
    console.log(this.TotalNumber, this.RadioNumber);
    this.Teleport.TotalNumber = this.TotalNumber;
    console.log("記數器", this.Teleport.TotalNumber);
  }

  addCheckboxPage() {

    console.log("開始值為", this.CheckboxNumber);
    this.Teleport.TotalNumber = this.TotalNumber;
    // TotalNumber 是累計所有題目總數
    // 不同類別要同步唯一值 就把累計的補進來
    // 算編碼需要-1 才能同步程式碼 以0做為起點的順序
    this.CheckboxNumber = this.TotalNumber;



    this.QuestPage[0].QuestList.push(
      {
        QuestionNumber: "QNum" + this.TotalNumber,
        QuestTitle: "",
        QType: 'checkbox',
        answer: [
          { value: "", select: "N", boolean: false },
          { value: "", select: "N", boolean: false },
        ]
      }
    );
    console.log(this.QuestPage[0].QuestList);

    this.CheckboxNumber = this.CheckboxNumber + 1;
    this.TotalNumber = this.CheckboxNumber;
    console.log(this.TotalNumber, this.CheckboxNumber);
    this.Teleport.TotalNumber = this.TotalNumber;
    console.log("記數器", this.Teleport.TotalNumber);
  }

  addOption(index: number) {
    this.QuestPage[0].QuestList[index].answer.push(
      { value: "", select: "N", boolean: false },
    );
    console.log(this.QuestPage[0].QuestList);
  }


  DeleteQuest(index: number) {
    // 可能之後要加判斷式
    this.QuestPage[0].QuestList.splice(index, 1);
    console.log(this.QuestPage[0].QuestList);
    console.log(index);
  }

  DeleteOption(QList: number, answerIndex: number) {
    this.QuestPage[0].QuestList[QList].answer.splice(answerIndex, 1);
    console.log("刪掉選項的 Vule", answerIndex)

  }


  // 今天新增的方法
  // saveData : any;

  createrPreview() {
    console.log("暫存打包", this.QuestPage);


    this.Teleport.inputText01 = this.inputText01;
    this.Teleport.inputText02 = this.inputText02;
    this.Teleport.inputText03 = this.inputText03;



    this.Teleport.createrJSON = this.QuestPage;
    console.log(this.Teleport.createrJSON);
  }












  ngOnInit(): void {
    console.log("初始JSON", this.QuestPage);

    this.TotalNumber = this.Teleport.TotalNumber;

    this.inputText01 = this.Teleport.inputText01;
    this.inputText02 = this.Teleport.inputText02;
    this.inputText03 = this.Teleport.inputText03;





    // 先檢查 service 裡的資料是否有值
    if (this.Teleport.createrJSON && this.Teleport.createrJSON.length > 0) {
      this.QuestPage = this.Teleport.createrJSON;
      console.log("初始JSON", this.QuestPage);
    }

    // 今日新增
    // if (this.QuestPage[0].HelperData.length == 0) {
    //   this.QuestPage[0].HelperData.push({ HelperName: 'x', HelperPhone: "", HelperEmail: "" });
    // }



  }







}

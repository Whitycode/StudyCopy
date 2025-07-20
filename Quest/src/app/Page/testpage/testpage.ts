import { Answer, Question, QuestForm } from './../../Interface/interface/interface';
import { Teleport } from './../../@service/teleport';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-testpage',
  imports: [
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './testpage.html',
  styleUrl: './testpage.scss'
})
export class Testpage {


  userName!: string;
  userPhone!: string;
  userEmail!: string;




  // // 整理的 精簡 JSON 空包裹
  // QuestPage: QuestForm[] = [
  //   {
  //     Title: "",
  //     QuestID: "",
  //     creatorName: "",
  //     QuestList: [
  //       {
  //         QuestionNumber: "",
  //         QuestTitle: "",
  //         QType: "",
  //         answer: [
  //           { value: "", select: "N", boolean: false }
  //         ]
  //       }
  //     ]
  //   }
  // ]



  QuestPage: QuestForm[] = [
    {
      Title: "測試用的問卷",
      QuestID: "QcID0003",
      creatorName: "",
      QuestList: [
        {
          QuestionNumber: "",
          QuestTitle: "說說對本次問卷排版的想法:",
          QType: "input",
          answer: [
            { value: "", select: "N", boolean: false }
          ]
        },
        {
          QuestionNumber: "",
          QuestTitle: "你比較喜歡甚麼動物:",
          QType: "radio",
          answer: [
            { value: "狗狗", select: "N", boolean: false },
            { value: "貓貓", select: "N", boolean: false }
          ]
        },
        {
          QuestionNumber: "",
          QuestTitle: "喜歡做的事情",
          QType: "checkbox",
          answer: [
            { value: "畫圖畫到忘記時間", select: "N", boolean: false },
            { value: "程式寫到天荒地老", select: "N", boolean: false }
          ]
        }
      ]
    }
  ]

  // radioOptions = this.QuestPage[0].QuestList[1];
  // checkboxOptions = this.QuestPage[0].QuestList[2];




  // 輸入框事件
  userInput: string = '';




























  // 選項事件
  RadioClick!: string;
  // 複選事件
  CheckDone = false;
  CheckDone3 = false;
  CheckDone4 = false;
  // 陣列要定義好裡面內容的類型
  CheckJson: string[] = [];

  // 說明欄測試
  QusetTest = "這邊是問卷的說明欄測試";

  // service 建構式
  constructor(private Teleport: Teleport, private router: Router) { }

  inputText() {
    // console.log(this.userInput);
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
    this.router.navigateByUrl('/preview');
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
}

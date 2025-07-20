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
  //     Directions:"",
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



  // 先用這個 JSON包裹 寫全部頁面展示資料
  QuestPage: QuestForm[] = [
    {
      Title: "測試用的問卷",
      QuestID: "QcID0003",
      Directions: "這邊是問卷的說明欄測試",
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





  // service 建構式
  constructor(private Teleport: Teleport, private router: Router) { }




  SeandJSON() {
    //用戶資料傳送 service
    this.Teleport.userName = this.userName;
    this.Teleport.userPhone = this.userPhone;
    this.Teleport.userEmail = this.userEmail;
    this.router.navigateByUrl('/preview');
  }




  ngOnInit(): void {
    console.log("JSON資料");
    console.log(this.QuestPage);
    this.Teleport.publicJSON = this.QuestPage[0];
    console.log(this.Teleport.publicJSON);
  }



}

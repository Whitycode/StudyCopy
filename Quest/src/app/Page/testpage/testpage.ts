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
      CreatorData: [
        {
          Title: "測試用的問卷",
          QuestID: "QcID0003",
          Directions: "這邊是問卷的說明欄測試",
          CreatorID: "創建者01",
          StartTime: "2025-07-10",
          EndTime: "2025-08-06",
        }
      ],

      HelperData: [],
      QuestList: [
        {
          QuestionNumber: "",
          QuestTitle: "說說對本次問卷排版的想法:",
          QType: "input",
          radioAnswer: "",
          answer: [
            { value: "", boolean: false, require: false }
          ]
        },
        {
          QuestionNumber: "",
          QuestTitle: "你比較喜歡甚麼動物:",
          QType: "radio",
          radioAnswer: "",
          answer: [
            { value: "狗狗", boolean: false, require: false },
            { value: "貓貓", boolean: false, require: false }
          ]
        },
        {
          QuestionNumber: "",
          QuestTitle: "喜歡做的事情",
          QType: "checkbox",
          radioAnswer: "",
          answer: [
            { value: "畫圖畫到忘記時間", boolean: false, require: false },
            { value: "程式寫到天荒地老", boolean: false, require: false }
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

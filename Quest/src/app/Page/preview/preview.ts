import { Answer, Question, QuestForm } from './../../Interface/interface/interface';
import { FormsModule } from '@angular/forms';
import { Teleport } from './../../@service/teleport';
import { Component } from '@angular/core';


@Component({
  selector: 'app-preview',
  imports: [
    FormsModule
  ],
  templateUrl: './preview.html',
  styleUrl: './preview.scss'
})
export class Preview {
  userName!: string;
  userPhone!: string;
  userEmail!: string;

  userInput!: string;

  // 傳送進來的 JSON公用變數
  // QuestPage 先定義成了 Interface的陣列格式
  // QuestJsonData 變成接收service的 JSON黨
  // 後面再推進去陣列 讓 HTML抓自己想要的第幾筆資料
  QuestPage: QuestForm[]=[];
  QuestJsonData!:QuestForm;

  constructor(private Teleport: Teleport

  ) { }





  ngOnInit(): void {
    // 傳送 Serivce資料進來
    this.userName = this.Teleport.userName;
    this.userPhone = this.Teleport.userPhone;
    this.userEmail = this.Teleport.userEmail;

    this.userInput = this.Teleport.userInput;

    // QuestJsonData 抓 Serivec 的 JSON資料
    // QuestPage 推進陣列中方便整理 想要第幾筆資料
    this.QuestJsonData = this.Teleport.publicJSON;
    this.QuestPage.push(this.QuestJsonData);
    console.log("QuestPage");
    console.log(this.QuestPage);

  }

}

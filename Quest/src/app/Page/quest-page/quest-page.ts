import { Teleport } from './../../@service/teleport';
import { Answer, Question, QuestForm } from './../../Interface/interface/interface';
import { Filespace } from '../../@service/filespace';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// 這不知道是啥
import { ActivatedRoute,RouterModule } from '@angular/router';
// import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-quest-page',
  imports: [
    FormsModule,
    RouterModule
  ],
  templateUrl: './quest-page.html',
  styleUrl: './quest-page.scss'
})
export class QuestPage {

  QuestPage: QuestForm[] = [];

  inputText01 = "姓名:";
  inputText02 = "電話: ";
  inputText03 = "郵箱: ";


  // 拿來填網址路由 子 QcID
  QcIDNow = "";

  // 這不知道是啥
  currentQuest?: QuestForm;


  constructor(
    // ActivatedRoute 抓取路由網址的資訊 像是路由/子ID
    private route: ActivatedRoute,
    private Filespace: Filespace,
    private Teleport: Teleport
  ) { }





  saveNow() {
    for (let i = 0; i < this.QuestPage.length; i++) {
      // 用迴圈 +length的方法 跑陣列幾筆的資料
      // 然後對照 QcID 相符的資料 存檔
      if (this.QuestPage[i].CreatorData[0].QuestID == this.QcIDNow) {
        console.log("value", i);
        console.log("暫存資料包", this.QuestPage[i]);

        this.Teleport.HelperJSONFile.push(this.QuestPage[i]);
        console.log("上傳至service",this.Teleport.HelperJSONFile);
        break; //用 break 將迴圈停止
      }
    }
  }


  ngOnInit(): void {
    this.QuestPage = this.Filespace.QuestPage;
    console.log(this.QuestPage);

    // 用 ActivatedRoute判斷 網域id 抓 QcID編號
    // 確認編號之後 找到對應的 QuestPadg[QcID] 是第幾筆
    // 抓取跳轉頁面 QcID 對應的 QuestPage{} 資料
    const questID = this.route.snapshot.paramMap.get('id');
    console.log(questID);
    this.QcIDNow = String(questID);

    if (questID) {
      this.currentQuest = this.Filespace.QuestPage.find(q =>
        q.CreatorData[0].QuestID === questID
      );

      // if (!this.currentQuest) {
      //   console.warn("找不到問卷資料，QuestID:", questID);
      // }
    }
  }





}


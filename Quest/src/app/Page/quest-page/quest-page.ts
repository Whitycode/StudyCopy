import { Answer, Question, QuestForm } from './../../Interface/interface/interface';
import { Filespace } from '../../@service/filespace';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// 這不知道是啥
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quest-page',
  imports: [
    FormsModule
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
    private Filespace: Filespace
  ) { }

  catchData() {
    // 需要抓 QcID編號
    // 確認編號之後 找到對應的 QuestPadg[QcID] 匯入QuestPage



  }


  ngOnInit(): void {
    this.QuestPage = this.Filespace.QuestPage;
    console.log(this.QuestPage);

    //抓取跳轉頁面 QcID 對應的 QuestPage{} 資料
    const questID = this.route.snapshot.paramMap.get('id');
    console.log( questID );
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


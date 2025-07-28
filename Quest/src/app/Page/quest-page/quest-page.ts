import { Teleport } from './../../@service/teleport';
import { Answer, Question, QuestForm } from './../../Interface/interface/interface';
import { Filespace } from '../../@service/filespace';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// 這不知道是啥
import { ActivatedRoute, RouterModule } from '@angular/router';
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

  // 判斷QcID是第幾筆資料 用全域變數抓數值出來
  QPageNumber = 0;

  // 拿來填網址路由 子 QcID
  QcID = "";




  constructor(
    // ActivatedRoute 抓取路由網址的資訊 像是路由/子ID
    private route: ActivatedRoute,
    private Filespace: Filespace,
    private Teleport: Teleport
  ) { }





  saveNow() {

    console.log("伺服器推送資料處",this.Teleport.HelperJSONFile);
    // 伺服器資料抓完要清空 不然上一筆資料會一直存在
    this.Teleport.HelperJSONFile=[];
    for (let i = 0; i < this.QuestPage.length; i++) {
      // 用迴圈 +length的方法 依序找陣列ID 對應的資料
      // 然後對照 QcID 相符的資料 存檔
      if (this.QuestPage[i].CreatorData[0].QuestID == this.QcID) {
        console.log("value", i);
        console.log("暫存資料包", this.QuestPage[i]);

        // 傳送 QcID & QuestPage對應資料 給service
        this.Teleport.QcID = this.QcID;
        this.Teleport.HelperJSONFile.push(this.QuestPage[i]);
        console.log("上傳至service", this.Teleport.HelperJSONFile);

        break; //用 break 將迴圈停止
      }
    }
  }


  ngOnInit(): void {
    // 假資料 Service傳遞過來
    this.QuestPage = this.Filespace.QuestPage;
    console.log(this.QuestPage);

    // 用 ActivatedRoute判斷 網域id 抓 QcID編號
    // 確認編號之後 找到對應的 QuestPadg[QcID] 是第幾筆
    // 抓取跳轉頁面 QcID 對應的 QuestPage{} 資料
    const questID = this.route.snapshot.paramMap.get('id');
    console.log(questID);
    this.QcID = String(questID);
  }





}


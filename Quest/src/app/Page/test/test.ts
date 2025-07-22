import { QuestForm, Question } from './../../Interface/interface/interface';
import { Teleport } from './../../@service/teleport';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DatePickerService } from '../../@service/date-picker-service';
import { Filespace } from '../../@service/filespace'


@Component({
  selector: 'app-test',
  imports: [
    FormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './test.html',
  styleUrl: './test.scss'
})
export class Test {
  // <select> 拿來搭配 [(ngModel)] 強制選擇用的
  hideSelect: string = "";

  setDate = new Date("2025-07-18");

  startDate: string = "";
  endDate: string = "";

  searchData: string = "";

  QuestPage: QuestForm[] = [];

  questionTitle = [
    { QT: "編號" },
    { QT: "問卷名稱" },
    { QT: "狀態" },
    { QT: "起始時間" },
    { QT: "結束時間" },
    { QT: "問卷連結" },
  ];

  // questionList = [
  //   { Number: 0, Title: '問卷01', state: "進行中", starTime: "2025-07-01", endTime: "2025-09-20", links: "測試1" },
  //   { Number: 4, Title: '問卷04', state: "尚未開始", starTime: "2025-07-01", endTime: "2025-07-07", links: "測試2" },
  //   { Number: 1, Title: '問卷02', state: "已結束", starTime: "2025-07-01", endTime: "2025-07-07", links: "測試2" },
  //   { Number: 2, Title: '問卷03', state: "尚未開始", starTime: "2025-09-01", endTime: "2025-10-20", links: "測試3" }
  // ];






  originalList: any[] = [];






  // 整理的 精簡 JSON 包裹




  // 定義頁面最大值 設定判斷當前頁面
  pageListMax = 5;
  currentPage = 1;
  pageNow: string = "01";

  get pagedData() {
    // 抓取資料 對照HTML迴圈 第一圈 0 ~ 4; 5 ~ 9; 以此類推
    const startPage = (this.currentPage - 1) * this.pageListMax;
    return this.QuestPage.slice(startPage, startPage + this.pageListMax);
  }
  // Math.ceil 無條件進位 現在假設有12筆資料 12/5 = 2.4 => 3
  // 那頁面就會 創建 3頁來擺資料
  get totalPages() {
    return Math.ceil(this.QuestPage.length / this.pageListMax);
  }

  changePage(page: number) {

    // 對照頁數 第一頁 <button (click)="changePage(currentPage - 1)"> 按玩變 0 不動作
    // 如果是 第2頁 沒有超過總頁數
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // 排版數字
      if (page < 10) {
        this.pageNow = '0' + page;
      } else {
        this.pageNow = String(page);
      }

    }
  }


  // pageRange(): number[] {
  //   return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  // }

  // 上面也是頁碼的程式，但看不懂先註解
  // (_, i) => i + 1) 這不知道是什麼意思



















  constructor(
    private router: Router,
    private DPservice: DatePickerService,
    private Teleport: Teleport,
    private Filespace: Filespace
  ) { }






  // 即時搜尋
  searchQuest(event: Event) {
    // let searchDataSpace: PeriodicElement[] = [];
    // this.questionList.forEach((res) => {
    //   if (res.Title.indexOf((event.target as HTMLInputElement).value) != -1) {
    //     searchDataSpace.push(res);
    //   }
    // })

    // console.log((event.target as HTMLInputElement).value);

    const keyword = (event.target as HTMLInputElement).value.trim();
    if (keyword === "") {
      // 若清空搜尋框，還原全部資料
      this.QuestPage = this.originalList.slice();
      return;
    }

    this.QuestPage = this.originalList.filter((res) =>
      res.CreatorData[0].Title.includes(keyword)
    );


  }





  sendDate() {
    this.DPservice.PageToSrevice = this.startDate;
    // 先運行 外掛元件 DPservice 的函式 再傳送日期
    this.DPservice.dateService();
    console.log("起始日期：", this.DPservice.pageDate);

    this.DPservice.PageToSrevice = this.endDate;
    this.DPservice.dateService();
    console.log("結束日期：", this.DPservice.pageDate);
  }

  test = "QcID-0001";
  testNumber: string = "";



  ngOnInit(): void {

    this.QuestPage = this.Filespace.QuestPage;
    // this.originalList = this.QuestPage.slice();

    // ✅ 2. 防呆：如果沒資料就不執行後續
    if (!this.QuestPage || this.QuestPage.length === 0) {
      console.warn("尚未取得任何問卷資料");
      return;
    }

    // ✅ 3. 初始化備份原始資料（給搜尋使用）
    this.originalList = this.QuestPage.slice();



    console.log("訂正", this.QuestPage);

    console.log("原始的時間樣式", this.setDate);

    this.DPservice.PageToSrevice = this.setDate;
    // 先運行 外掛元件 DPservice 的函式
    this.DPservice.dateService();
    // 我有補充 格式修正 MM-DD
    console.log(this.DPservice.year);
    console.log(this.DPservice.mouth);
    console.log(this.DPservice.day);

    console.log(this.DPservice.pageDate);
    console.log(new Date(this.DPservice.pageDate));


    // 改寫QcIDxxxx 編號 只取出數字
    for (let i = 0; i < this.test.length - 5; i++) {
      this.testNumber = this.testNumber + this.test.slice(i + 5, i + 6);
    }
    console.log("編號", this.testNumber);
    // 其實 HTML可以直接()slice() ...
    // ...但寫了就寫了，放著

    // 搜尋欄變數
    // this.originalList = this.QuestPage.slice();




  }




}

import { Component, Input, output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ExampleService } from './../@services/example.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './second.html',
  styleUrl: './second.scss'
})
export class Second {



  userName: string = "";
  userEmail: string = "";
  userPhone: string = "";

  memberData!: any;



  @Input() userTab!: string;
  @Input() think!: string;
  @Input() inputTest!: string;
  // Input 寫在哪個元件 就要 import在哪個元件

  outputEmit = output<string>();
  // output寫法 意思是
  // 我定義一個全域變數 使用方法 最後輸出格式為 string
  // 全域變數名稱 = output<屬性>()








  constructor(
    private router: Router,
    private exampleService: ExampleService
  ) { }

  //ngOnInt 頁面設定初始值/抓資料 會寫在這裡
  ngOnInit(): void {

    // 讓second 這邊 能接收到 Service 的 userName 的值
    // first 輸入 > Service 接收 > 傳遞到 second
    this.userName = this.exampleService.userName;
    this.userEmail = this.exampleService.userEmail;
    this.userPhone = this.exampleService.userPhone;

    // second頁面不能寫 this.exampleService.memberData
    // 因為 exampleService 是我們設定的建構式
    // 建構式只作用在 TS裡面 所以要額外宣告一個變數來抓 資料
    this.memberData = this.exampleService.memberData;


    // 這邊 if判斷式的意思是
    // 沒有值 (因為 ! 代表相反) 執行 "Input為空值"
    if (!this.userTab) {
      this.userTab = "Input為空值";
    }
    console.log(this.userTab);
    console.log(this.think);

  }

  // output觸發的方法 要寫在 () 來執行輸出
  // 記得 this.output變數名稱.emit 這裡 .emit記得寫
  outputFun(){
    this.outputEmit.emit("padma 小小建築師");
  }




}

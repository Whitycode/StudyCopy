
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ExampleService } from './../@services/example.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-first',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule
  ],

  templateUrl: './first.html',
  styleUrl: './first.scss'
})
export class First {

  userName: string = "";
  userEmail: string = "";
  userPhone: string = "";



  // ngOnInt 可以拿來測試方法是否生效
  // 會直接在 網頁 開發者工具中的 Console 做回應
  ngOnInit(): void {
    this.testMistake();
    // let data: any = "sss";
    // console.log(parseInt(data) + 3); // 這會報錯
  }

  // 要使用 Service服務 要在建構式裡宣告
  // 建構式起手式 private 私人 因為平常只會在 TS裡做判斷
  // 平常不會寫到 public 共用 所以 private就好
  // 切換頁面要用 Router
  constructor(
    private router: Router,
    private exampleService: ExampleService
  ) { }


  // 變更頁面 可以在方法的括弧 設定參數宣告 拿來頁面使用
  changPage(url: string) {
    this.router.navigate([url])
    // this.router.navigateByUrl([url]) 同樣寫法
  }
  goSecond() {
    // 將要傳遞的內容 塞進去 exampSerive 的變數中
    this.exampleService.userName2 = 'Allen';
    // 切換頁面
    this.router.navigateByUrl('/second');
  }



  tabName() {

    //資料確定後 傳到 Service的 Name值 要記得轉成文字字串
    this.exampleService.userName = this.userName;
    this.exampleService.userEmail = this.userEmail;
    this.exampleService.userPhone = this.userPhone;


  }


  //   問老師
  userMistake() {
    this.tabName()
    if (typeof this.exampleService.userName == 'string') {
      console.log("ok")
    }
    else {
      console.log("no")
    }
  }


  // 測試文字/數字 判斷式
  testMistake() {
    let Test = 5;
    if (typeof Test == 'string') {
      console.log("ok")
    }
    else {
      console.log("no")
    }







    // showName(){
    //   console.log(this.userName);
    // }




  }
}

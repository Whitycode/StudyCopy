import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Second } from './second/second';
import { FormsModule } from '@angular/forms';


// RouterOutlet 顯示路徑
// 當要讓網頁顯示其他頁面內容 要記得imports : [RouterOutlet]
@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    Second,
    FormsModule
  ],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'RoutingStudy';
  imgHmm: string = "hummm.jpg";

  userNameOut!:string;


  // constructor 是頁面的建構式
  // 建構是用來宣告 這個網頁的TS要使用的套件 函式 服務等
  // 當你下面TS程式中需要用到套件...等 你就需要先宣告
  // 宣告寫在建構式的()中 private 宣告一個全域變數 讓他等於你要用的套件
  // 後面再接你要用的套件名稱
  // 所以要用到套件的話就跟痊癒變數用法相同 用this.

  constructor(private router: Router) { }

  changPage(url: string) {
    this.router.navigate([url])
    // this.router.navigateByUrl([url])
  }




}

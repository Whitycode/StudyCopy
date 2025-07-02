import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Second } from './second/second';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule,
    Second
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected title = 'inputData';
  imgHmm: string = "hummm.jpg";


   inputTest:string="";

  // constructor 是頁面的建構式
  // 建構是用來宣告 這個網頁的TS要使用的套件 函式 服務等
  // 當你下面TS程式中需要用到套件...等 你就需要先宣告
  // 宣告寫在建構式的()中 private 宣告一個全域變數 讓他等於你要用的套件
  // 後面再接你要用的套件名稱
  // 所以要用到套件的話就跟痊癒變數用法相同 用this.

  constructor(private Router: Router) { }

  changPage(url: string) {
    this.Router.navigate([url])
    // this.router.navigateByUrl([url])
  }

  // output宣告的方法
  showData(outputTest:string){
    console.log(outputTest);
  }


}

import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Page01 } from './Page/page01/page01';
import { Page02 } from './Page/page02/page02';
import { Page03 } from './Page/page03/page03';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    // 首頁嵌入的 頁面元件
    Page01,
    Page02,
    Page03,
    // Routing路由套件
    RouterLink,
    RouterLinkActive,
    // ngClass 動態呈現
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Routing02';

  // ngClass用的變數
  booleanNgCss = false;

  changeBoolean(){
    console.log(123);
    if(this.booleanNgCss != false){
      return "ngDo";
    }
    return;
    }

  changeNgClass() {
    this.booleanNgCss = !this.booleanNgCss
  }



  // ngClass用的變數

  // constructor()建構式 會先初始化資料
  // 載入你要使用的內建服務
  constructor(private router: Router) { }

  ngOnInit() {
    // 下面寫法是先將你的頁面跳轉至哪裡
    // 跳轉至 page02
    this.router.navigateByUrl('/page02');
    // 跳轉至 page01
    // this.router.navigateByUrl('/page01');
    // 跳轉至首頁
    this.router.navigateByUrl('/');


  }

}



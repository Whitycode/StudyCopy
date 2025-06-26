// import 是寫我們要使用套件的位置
// { }中的內容，就是我們要去用套件的名稱

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Componet 這裡面的內容 是 HTML頁面的設定檔
// 這個設定檔，包含了要使用這個頁面的標籤名稱 (selector)

// imports寫的 是頁面要使用得套件
// templatellr 是寫這個TS對應的HTML檔案
// StyleUrl 是寫這個TS對應的 CSS檔案


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

// export class 裡面就是寫這個頁面要寫的 TYPEScript
// export class 後面就是頁面的名稱

export class App {
  protected title = 'CssEx';
  textTitle:string = "文字設定字串textTitle";

  butName:string ="扌安扌丑";

  TitleA:string = "我是標題";

  TitleB:string = "內容是我";

  imgHmm:string = "hummm.jpg";

  //新建節點


  showTitle(){
  // alert 是彈出視窗
    alert(this.TitleA);
  }

  showTitle2(){

  let alertButton = "我是一次性按鈕";
    alert(alertButton);
  }

 showButton(showTEST:string){
    alert(showTEST);
  }


}

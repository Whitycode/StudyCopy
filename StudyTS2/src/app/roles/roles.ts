// 引用元件或套件...等 要告訴系統 他們從哪邊來
import { Component } from '@angular/core';


// @Component 寫的是HTML設定
// 包含了他的標籤名稱 selector 引用的套件 imports
// imports寫的 是頁面要使用得套件
// templatellr 是寫這個TS對應的HTML檔案
// StyleUrl 是寫這個TS對應的 CSS檔案


@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.html',
  styleUrl: './roles.scss'
})

// 元件的名稱是 Roles
export class Roles {

}

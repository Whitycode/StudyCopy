// 下面這段程式是告訴系統這個 TS是大家共用的
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// 到這裡

// export class 後曼是這個檔案的名稱
export class ExampleService {

  // 定義變數 string 不能大寫
  // 定義變數 string 不能大寫
  // 定義變數 string 不能大寫
  // 會出問題 幹

  userName2: string = "";
  userName: string = "";
  userEmail: string = "";
  userPhone: string = "";


  constructor() { }
}

// Fisrst 丟東西進 Service

// First 切換頁面到 Second

// Second 抓取 Service 的資料

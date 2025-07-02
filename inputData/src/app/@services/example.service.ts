// 下面這段程式是告訴系統這個 TS是大家共用的
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  // 定義變數 string 不能大寫
  // 定義變數 string 不能大寫
  // 定義變數 string 不能大寫
  // 會出問題 幹

  userName: string = "";
  userEmail: string = "";
  userPhone: string = "";

  memberData!: any ;

  constructor() { }
}


// Fisrst 丟東西進 Service

// First 切換頁面到 Second

// Second 抓取 Service 的資料

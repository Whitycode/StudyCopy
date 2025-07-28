import { Answer, Question, QuestForm } from '../Interface/interface/interface';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Teleport {

  userName: string = "";
  userPhone: string = "";
  userEmail: string = "";

  userInput: string = "";
  IntData: string = "";

  // 更改成 Interface的格式
  publicJSON!: QuestForm;


  // 創建者專用 service變數
  // TotalNumber 拿來記數 免得切換頁面 問題編碼重置
  createrJSON: QuestForm[] = [];

  TotalNumber = 0;
  // 創建者變更姓名欄位用的
  inputText01: string = "";
  inputText02: string = "";
  inputText03: string = "";

  // 用戶輸入資料
  // 可能下面重複推到別的頁面的資料了
  HelperJSONFile: QuestForm[] = []; // QuesrtPage
  HJSON: QuestForm[] = [];
  QPageNumber: number = 0; //跳轉頁面第幾筆

  QcID = ""; // 對照資料筆數的 QcID

  constructor() { }
}

import { Answer, Question, QuestForm } from '../Interface/interface/interface';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Teleport {

  userName:string = "";
  userPhone:string = "";
  userEmail:string = "";

  userInput:string = "";

  IntData:string = "";

  // 更改成 Interface的格式
  publicJSON!:QuestForm;


  // 創建者專用 service變數
  // TotalNumber 拿來記數 免得切換頁面 問題編碼重置
  createrJSON: QuestForm[] = [];
  TotalNumber = 0;
  // QList!:number;

  constructor() { }
}

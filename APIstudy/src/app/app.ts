import { HttpClientServices } from './@http-client/http-client.services';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'APIstudy';
  imgHmm: string = "hummm.jpg";


  //建構式宣告要使用的服務
  constructor(private httpClientServices: HttpClientServices) { }

  LocationAPI!: any

  useTool: any;

  // 區域按鈕 全域變數
  ButtonTest: any;
  ButtonName: any;
  ButtonNumber: any;
  ShowButtonName!: any;
  // 區域按鈕 全域變數

  // 時間點 全域變數
  SameSetTime!: any;
  WhatTime!: any;
  TimeIs!: any;
  // 時間點 全域變數
  TimeNumber!:any;

  // 轉換變數 傳回數據;
  ForHTML! :any;
  LocationNumber = 0;
  HtmlForTime = 0;



  ngOnInit(): void {
    // 呼叫服務中的方法 .subscribe 是固定寫法 訂閱
    this.httpClientServices.getApi('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-85DEAF98-832E-463D-BB49-0EA3D21E3864&limit=10&format=JSON')
      .subscribe((res: any) => {
        // 政府檔案是用Json包裹起來的
        // 所以就xxx.xxx.xxx[?] 你要的資料位置
        // 這個檔案只有高雄市

        // console.log(res); // 高雄市 的 天氣資料 Json
        console.log(res.records);
        this.LocationAPI = res.records.Locations[0]; //高雄市 第一筆

        console.log(this.LocationAPI.LocationsName);// 高雄市 的名字

        for (let NewData of this.LocationAPI.Location) {

          console.log(NewData); // 區域的資料 Json
          console.log("地區:", NewData.LocationName); // 區域的資料

          for (let NewData2 of NewData.WeatherElement) {

            //溫度,露點溫度,相對濕度,體感溫度,舒適度指數,風速,風向,3小時降雨機率,天氣現象天氣預報綜合描述

            console.log("天氣描述:", NewData2.ElementName); // 天氣相關描述
            console.log(NewData2); // 天氣相關檢測 Json

            this.useTool = NewData2;
            console.log(this.useTool.ElementName);

            for (let NewData3 of NewData2.Time) {

              // console.log(NewData3); // 時間節點 Json
              // console.log(NewData3.StartTime) // 開始觀測時間
              // console.log(NewData3.EndTime) // 結束觀測時間 每3小時檢測一次

              for (let NewData4 of NewData3.ElementValue) {

                // console.log("完整描述:",NewData4.WeatherDescription); // 天氣描述
                console.log(NewData4); // 天氣描述 Json

              }

            }
          }
        }
        console.log("LocationsName");
        console.log(res);
        // 這個路徑有 你查詢的Api名稱跟內容 還有你查哪個縣市 這個是一個json資料
        // res.records.Locations[0]

        // 這個路徑有 你查詢的縣市的區域的內容 陣列中每筆資料代表一個區域 這個是一個陣列Array資料
        // res.records.Locations[0].Location

        // 指定你選擇的縣市中的某個區域的內容 這個是一個json資料
        // res.records.Locations[0].Location[0]

        // 指定你選擇的縣市中的某個區域的氣象內容 這個是一個陣列Array資料
        // res.records.Locations[0].Location[0].WeatherElement

        // 指定你選擇的縣市中的某個區域中的某個氣象內容(經緯度、氣象內容名稱) 這個是一個json資料
        // res.records.Locations[0].Location[0].WeatherElement[0]

        // 指定你選擇的縣市中的某個區域中的某個氣象內容(經緯度、氣象內容名稱)的資訊 這個是一個陣列Array資料
        // res.records.Locations[0].Location[0].WeatherElement[0].Time

        // console.log(res);
        // console.log(res.records.Locations[0]);
        // console.log(res.records.Locations[0].Location[0]);
        // console.log(res.records.Locations[0].Location[0].WeatherElement);
        // console.log(res.records.Locations[0].Location[0].WeatherElement[0]);
        // console.log(res.records.Locations[0].Location[0].WeatherElement[0].Time);



        //測試Api位置攔
        console.log("有幾組地區資料:", this.LocationAPI.Location.length);
        //測試Api位置攔
        console.log("地區:", res.records.Locations[0].Location[0].LocationName);





        // 全域變數變更設定欄位
        this.SameSetTime = res.records.Locations[0].Location[0]

        console.log("測試迴圈");
        //測試迴圈
        for (let i = 0; i < 10; i++) {
          console.log(this.SameSetTime.WeatherElement[0].ElementName); //參數名稱
          console.log(this.SameSetTime.WeatherElement[0].Time[0].DataTime); //時間戳記
          console.log(this.SameSetTime.WeatherElement[0].Time[0].ElementValue[0].Temperature); //參數的值
        }
        console.log("迴圈結束");
        //第 0筆 2025-07-04-12:00
        //第 35筆 2025-07-05-23:00
        //第 36 ~ 55筆 每 3小時 算一次

        // WeatherElement 改變 溫度 濕度 舒適度指數 風速 降雨機率 天氣預報綜合描述 ...等選項

        console.log("溫度對應日期:", res.records.Locations[0].Location[0].WeatherElement[0].Time[0].DataTime);


        // console.log("天氣描述:", res.records.Locations[0].Location[0].WeatherElement[9].Time[0].ElementValue[0].WeatherDescription);
        console.log(this.LocationAPI);
      });



    // 測試時間節點



  }



  //測試全域變數





  TabButton(HTMLtoTSButton: any) {

    // 這裡是
    // 地區位置測試區間

    // 測試按鈕 從 API 傳回來的 JSON 在 JSON.LocationName 抓地區名字

    // console.log("現在按鈕是:", HTMLtoTSButton.LocationName);

    // 用上面設定過的 length 來選取範圍; 地區資料有 10筆
    for (let i = 0; i < this.LocationAPI.Location.length; i++) {

      if (this.LocationAPI.Location[i].LocationName == HTMLtoTSButton.LocationName) {
        console.log("現在按鈕的位置是:", HTMLtoTSButton.LocationName, "是第", i, "位置");
        this.ButtonNumber = i;
        this.ShowButtonName = String(HTMLtoTSButton.LocationName);
        this.LocationNumber = i ;
      }
    }

    // 這裡是
    // 時間點測試區間
    console.log("現在時間是:", HTMLtoTSButton); // JSON
    // console.log(HTMLtoTime.DataTime);
    this.TimeIs = HTMLtoTSButton.DataTime;

    // console.log(this.TimeIs);

    if (this.TimeIs == "2025-07-05T14:00:00+08:00") {
      console.log("與現在按鈕的時間點相等");
      console.log(this.TimeIs);
      console.log("時間點相等");
    }

    console.log("*******按鈕停止點*******");
    // 我要抓出來的資料
    console.log(HTMLtoTSButton);
    console.log(this.LocationAPI.Location[this.ButtonNumber]); // JSON

    console.log("地區位置:", this.ButtonNumber);
    console.log("時間節點:", this.TimeIs);

    // console.log(this.LocationAPI.Location[this.ButtonNumber].WeatherElement[0].Time[0].DataTime);
    for (let i = 0; i < 56; i++) {
      if (this.LocationAPI.Location[this.ButtonNumber].WeatherElement[0].Time[i].DataTime == this.TimeIs) {
        console.log("現在的時間點是第", i, "筆");
        this.TimeNumber = i;
        this.HtmlForTime = i;
      }
    }
    // 我要抓出來的資料
    console.log(this.ButtonNumber);
    console.log(this.TimeNumber);
    console.log(this.LocationAPI);

    // 更改地區 陣列數值
    // 更改時間點 陣列數值
    // 前置要先套用.WtherElement[i] 在抓時間點 Time[i] 再抓元素值

    // this.LocationAPI.Location[this.ButtonNumber].WeatherElement["迴圈顯示"].Time[i].Temperature;


    // 我要抓出來的資料

  }


  NewDataHtml(){
    this.ForHTML =this.LocationAPI.Location[this.ButtonNumber].WeatherElement[0].Time[this.TimeNumber].Temperature;
  }


  // // 天氣檢測 第 1 ~ 6 是用 DataTime
  // // 先寫到 第 6 點 後面是每 3小 抓一次 另外寫起始點 後面不變
  // // 天氣檢測 第 7 ~ 9 是用 StartTime
  // // 回傳時間點按鈕
  // TimeNow(HTMLtoTime: any) {
  //   console.log("現在時間是:", HTMLtoTime); // JSON
  //   // console.log(HTMLtoTime.DataTime);
  //   this.TimeIs = HTMLtoTime.DataTime;

  //   // console.log(this.TimeIs);

  //   if (this.TimeIs == "2025-07-05T14:00:00+08:00") {
  //     console.log("與現在按鈕的時間點相等");
  //     console.log(this.TimeIs);
  //     console.log("時間點相等");
  //   }





}

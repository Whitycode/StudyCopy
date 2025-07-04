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

  weatherApi: any;
  Local: any;
  useTool: any;
  Text: any;

  ngOnInit(): void {
    // 呼叫服務中的方法 .subscribe 是固定寫法 訂閱
    this.httpClientServices.getApi('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-85DEAF98-832E-463D-BB49-0EA3D21E3864&limit=10&format=JSON')
      .subscribe((res: any) => {
        // 政府檔案是用Json包裹起來的
        // 所以就xxx.xxx.xxx[?] 你要的資料位置
        // 這個檔案只有高雄市

        // console.log(res); // 高雄市 的 天氣資料 Json
        console.log(res.records);
        this.weatherApi = res.records.Locations[0]; //高雄市 第一筆

        console.log(this.weatherApi.LocationsName);// 高雄市 的名字

        for (let NewData of this.weatherApi.Location) {

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
      });






  }





}

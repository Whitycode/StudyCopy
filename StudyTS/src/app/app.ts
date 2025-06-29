
import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  imgHmm: string = "hummm.jpg";


  ngOnInit(): void {

    //開發者用來除厝或是觀察程式的開發工具

    // let numData: number = 100;
    // let stringData: string = '2';
    // // parseInt() 可以將()的東西轉換為數字

    // console.log(numData * parseInt(stringData));





    // let numData: number = 5;
    // let stringData: string = '34';

    // console.log(numData);
    // console.log(stringData);

    // //String() 可以將格式轉為文字串
    // console.log(String(numData));
    // //也可以在 number的格式的前面或後面 + ""/'' 讓系統修改成文字
    // console.log(numData + "");
    // console.log(numData + '');
    // console.log('' + numData);





    // // josn的資料格式沒有自訂義的話先用 any (或是interface自定義)
    // let jsonData:any ={
    //   name:'Gelin',   //換行接逗號 ,
    //   lev:12
    // };
    // console.log(jsonData);  // JSON可以把字串轉成 文字串格式,寫法如下
    // console.log(JSON.stringify(jsonData));





    // let stringData:string ='{"name":"Gelin","lev":12}';
    // console.log(JSON.parse(stringData));
    // // 文字串轉換成JSON檔 ,可以像翻書一樣將函式打開






    // let numA = 50;
    // numA += 2;
    // console.log(numA);

    // "apple" != "apple"    //這段兩端需要不相等式  會傳送 fulse 回來


    //   let jsonData = {
    //     name:{
    //       lastName :'Wilson',
    //       name: 'Gelin'
    //     },
    //   }
    //   console.log(jsonData.name);          //抓資料可以用. 但是後端時無法使用
    // //想要抓取json資料的來會內容的時候 直接在json的變數後面加上. 抓取你想要的內容
    //   console.log(jsonData.name.lastName);

    // yyyy/MM/dd/ hh:mm:ss // 年/月/日 時/分/秒
    // 0~6 分別對應的是 禮拜天 ~ 禮拜六




    // let stringData = 'Blackie';
    // console.log(stringData.length);         // 文字全部有多少字符                輸出 7
    // console.log(stringData.slice(1,2));     // 從 1~2 抓字符                    輸出 l
    // console.log(stringData.indexOf('k'));   // 因為程式是從 0開始算         所以 輸出4
    // console.log(stringData.indexOf('ac'));  // 檢索2個以上的文字 會以開頭來計算   輸出為 2
    // console.log(stringData.indexOf('t'));   // 文字裡面沒有的字符                輸出會是-1|






    // let arrayData: Array<string> = ['a', 'b', 'c', 'd', 'e'];
    // // let arrayData2 = ['a', 'b', 'c', 'd', 'e'];
    // arrayData = arrayData.filter((returnData) => {
    //   console.log(arrayData);
    //     return ;
    //     // return returnData =='a'|| returnData == 'c'; 回去思考一下這段
    // })






    // //這段解釋分別為
    // // i = 0    "定義"      i = 0
    // // i < 20   "判斷"      i 是否小於 20
    // // i ++     "運算式"    完整寫法 >>    i = i + 1

    // for (let i = 0; i < 20; i++) {
    //   console.log(i);
    // }

    // // JavaScript 寫法
    // let arrayData8 = ['a', 'b', 'c', 'd', 'e'];
    // for (let i = 0; i < arrayData8.length; i++) {
    //   console.log(arrayData8);
    // }

    // // TypeScript 寫法
    // for (let data of arrayData8) {
    //   console.log(data);
    // }

    // // TypeScript 找資料解法
    // let i = 0;
    // for (let dataB of arrayData8) {
    //   console.log(i);
    //   console.log(dataB);
    //   i = i + 1
    // }




    // 練習1 試著將1~50打印出來。(for迴圈)
    console.log("打出1~50");
    let Data: number = 0
    for (let i = 0; i < 50; i++) {
      Data = Data + 1
      console.log(Data);
    }
    // i 是 跑 50次的迴圈 ; Data 是讓數值每次+1





    // 練習2 去除偶數
    console.log("從 1~50 把偶數替除掉");

    let numCard = 0
    for (let i = 0; i < 50; i++) {
      numCard = numCard + 1
      let x2 = numCard % 2
      if (x2 == 1) {
        console.log(numCard);
      }
    }


    // 除以 3 餘數等於 2 輸出 2
    console.log("輸出 除以 3 餘數等於 2 的值");

    let numFor3 = 8 % 3;
    console.log(numFor3);

    // 練習3
    console.log("除以3餘數等於2");

    let DataRem = 0;
    for (let i = 0; i < 50; i++) {
      DataRem = DataRem + 1
      let x = DataRem % 3

      if (x == 2) {             // 運算式,判斷數值是否為對 請用 ==
        console.log(DataRem);
      }
    }


    console.log("之後再改練習4")
    // let data = [
    //   { name: '小明',age: 10  },
    //   { name: '小陳',age: 24  },
    //   { name: '小王',age: 16  },
    // ]
    // console.log(data);
    // console.log(data.length);
    // let wang = data.forEach((item, index, array)=>{
    //   data[index] = item + "18"
    // })
    // console.log (data)



    console.log("比較數字大小");

    let NumberBox = ["24", "18", "100", "10", "1", "1200"];
    console.log(NumberBox);

    // 設定一個空的數組 Box2 來擺最大值
    // 定義 Max 從第一個數字開始當起頭
    let Box2 = [];
    let Max = Number(NumberBox[0]);

    // 有定義 Max了 所以迴圈可以從第二個開始算
    // TestNumber 是拿來與一開始定義的數值 比較用的數值
    for (let i = 1; i < NumberBox.length; i++) {
      let TestNumber = Number(NumberBox[i]);
      if (TestNumber > Max) {
        Max = TestNumber;
        // 如果數值比初始值大 替換 Max數值
      }
    }

    Box2.push(Max);
    console.log(Box2);









    // NameString,length 這段是檢索字串裡面有多少的字元
    // 字元有多少，迴圈就跑多少圈就好~
    // NameString.slice(i,i+1) 這段輸出會是 (0,1);(1,2);(2,3);(3,4)
    // 剛好跑完你要抓取的文字
    let NameString = '我是小黑';
    console.log(NameString);
    for (let i = 0; i < NameString.length; i++) {
      console.log(NameString.slice(i, i + 1));
    }

    let NameWhity = "Whity討厭寫倒轉過來的文字程式";
    let NameSum = "";                                //定義一個空字串 來加總文字
    for (let o = 0; o < NameWhity.length; o++) {
      NameSum = NameSum + NameWhity.slice(NameWhity.length - o - 1, NameWhity.length - o);
    }
    //迴圈每過一趟 字串就填補回去
    //因為是做倒過來的 所以 NameWhity.slice 要反推回去
    console.log(NameSum);





    let NameNew = "我是下水道夜魔，你好";
    let Space = [];
    console.log(NameNew);
    // 檢索的頭尾判定
    // ， 的尾巴我是直接後段做全部刪除
    let Start = "我是";
    let Stop = NameNew.indexOf('，');
    for (let z = 0; z < NameNew.length; z++) {
      Space.push(NameNew.slice(z, z + 1));
    }
    // 用 push把篩出來的 文字 塞進 空數列裡
    // 用意是把 文字串做成 數列組，方便檢索
    console.log(Space);  // 篩出來的文字數列組

    // 去尾數組 ; 去頭數組
    Space.splice(Stop, NameNew.length);
    Space.splice(0, Start.length);

    // 下面是將篩檢過後的 Space數組 重組
    // intoName 新增空白字串 用來填整理出來的文字
    let intoName = "";
    for (let y = 0; y < Space.length; y++) {
      Space.slice(y, y + 1);
      let NameAll = Space[y];
      intoName = intoName + NameAll;
      console.log(Space[y]);

    }
    console.log(intoName);



















    // 1. 試著將1~50打印出來。(for迴圈)
    // 2. 承接第一題將偶數去除並且打應出來。
    // 3. 將1~50除以3餘數為2的值打印出來。(for迴圈)
    // 4. 建立右圖的資料並且使用forEach修改小王的age為
    // 18。183Each)
    // 5. 找出陣列裡的最小值([4, 6, 1, 2, 7, 9, 12, 15, 13])
    // 6. 倒著印出字串(你好我是Allen)
    // 7. 將這段文字中的名稱打印出來(我是Allen，你好)






  }

  clickFun() {

  }

}




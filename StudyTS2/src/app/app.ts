import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Roles } from './roles/roles';
import { Set01 } from './set01/set01';
import { Set02 } from './set02/set02';

// 按 / VScode可以直接呼叫出路徑方便找路徑資料
// ./ 是目前的資料夾位置 類似 cmd 的 cd ..指令
// 新呼叫的 套件名稱用 import 呼叫 from 檔案路徑
// Roles 是新的套件名稱 是剛剛建立的新元件
// 自己建立的路徑在 ./roles/roles.ts 但不用.ts


// selector 是元件的名稱
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Roles,
    Set01,
    Set02
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'StudyTS2';


  imgHmm: string = "hummm.jpg";


  ngOnInit(): void {

    //開發者用來除厝或是觀察程式的開發工具


    console.log("數字/文字格式 轉換");
    let numData: number = 100;
    let stringData: string = '2';
    // parseInt() 可以將()的東西轉換為數字

    console.log(numData * parseInt(stringData));

    let numDa: number = 15;
    console.log(numDa);



    let numData2: number = 5;
    let stringData2: string = '34';

    console.log(numData2);
    console.log(stringData2);

    //String() 可以將格式轉為文字串
    console.log(String(numData2));
    //也可以在 number的格式的前面或後面 + ""/'' 讓系統修改成文字
    console.log(numData2 + "");
    console.log(numData2 + '');
    console.log('' + numData2);





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






    // "apple" != "apple"    //這段兩端需要不相等式  會傳送 fulse 回來


    console.log("JSON檔案檢索方法");
    let jsonData = {
      Name: {
        lastName: 'Wilson',
        name: 'Gelin'
      },
    }
    console.log(jsonData.Name);          //抓資料可以用. 但是後端時無法使用
    //想要抓取json資料的來會內容的時候 直接在json的變數後面加上. 抓取你想要的內容
    console.log(jsonData.Name.lastName);
    console.log(jsonData.Name.name);




    console.log("時間格式寫法");
    let TimeNow = new Date();
    console.log(TimeNow);

    TimeNow = new Date("2025-5-30");
    console.log(TimeNow);

    TimeNow = new Date("2025-5-30 10:30:30");
    console.log(TimeNow);

    // yyyy/MM/dd/ hh:mm:ss // 年/月/日 時/分/秒
    // 0~6 分別對應的是 禮拜天 ~ 禮拜六




    // let stringData = 'Blackie';
    // console.log(stringData.length);         // 文字全部有多少字符                輸出 7
    // console.log(stringData.slice(1,2));     // 從 1~2 抓字符                    輸出 l
    // console.log(stringData.indexOf('k'));   // 因為程式是從 0開始算         所以 輸出4
    // console.log(stringData.indexOf('ac'));  // 檢索2個以上的文字 會以開頭來計算   輸出為 2
    // console.log(stringData.indexOf('t'));   // 文字裡面沒有的字符                輸出會是-1|








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
      let EvenNum = numCard % 2
      if (EvenNum == 1) {
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


    console.log("修改 JSON裡面的資料;檢索與替換")
    let NameData = [
      { name: '小明', age: 10 },
      { name: '小陳', age: 24 },
      { name: '小王', age: 16 },
    ];

    // forEach 會更改 JSON陣列資料
    // map 會額外新增 不會更改
    NameData.forEach((item, index, array) => {
      // 用 if 檢索 NameData 裡面是 "小王" 的資料
      if (NameData[index].name == '小王') {
        // NameData[index] 就是 item ;item 值/index 內容 / array 運算式
        item.age = 18;
      }

    });
    console.log(NameData);





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
      // TestNumber 是把 JSON資料轉換成 數字
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











    console.log("第二周的 TypeScript練習")

    // 1. Allen錢包裡有 200 元，買了一個漢堡(50)，三個薯條
    //   (40)，他還剩下多少錢？
    // 2. Allen身上有 5000 元，想要買 10 份漢堡、10 份薯條，
    //   因為他有會員卡，所以可以打九折優惠，請問他還剩下
    //   多少錢？
    // 3. 建立右圖的資料並且用程式判斷誰有達成VIP資格(累積
    //    花費200以上)
    // 4. 寫一個可以帶入體重的方法來計算BMI在哪個區間





    console.log("Allen的錢包有200塊 買了50元的漢堡 和 3份40元薯條");
    console.log("Allen剩下多少錢?");

    let Allen = {
      Wallet: 200,
    };

    let Foods = {
      Hambuger: 50,
      Fries: 40,
    }
    // 扣掉 買了漢堡+3份薯條的錢 更新Allen的錢包
    Allen.Wallet = Allen.Wallet - Foods.Hambuger - Foods.Fries * 3

    console.log(Allen.Wallet);




    console.log("現在有 5000元 會員卡打九折 買10份漢堡+10份薯條");
    //會員卡友 優惠 10% off (等於 9折優惠)
    let VipDiscount = {
      Vip: 0.9
    };
    //更新 Allen的錢包 5000元
    Allen.Wallet = 5000;
    // 買了 10份漢堡+10份薯條的錢 會員卡打九折
    Allen.Wallet = Allen.Wallet - VipDiscount.Vip * (Foods.Hambuger * 10 + Foods.Fries * 10)

    console.log(Allen.Wallet);













    // console.log("誰花了最多錢");
    // let PayCollect = [
    //   {
    //     userName: "Mo",
    //     payMoney: 50,
    //   },
    //   {
    //     userName: "Blackie",
    //     payMoney: 500,
    //   },
    //   {
    //     userName: "Whity",
    //     payMoney: 90,
    //   },
    //   {
    //     userName: "Gelin",
    //     payMoney: 20,
    //   },
    // ]







    console.log("誰花了最多錢");
    let PayCollect = [
      {
        userName: "Mo",
        payMoney: 50,
      },
      {
        userName: "Blackie",
        payMoney: 500,
      },
      {
        userName: "Whity",
        payMoney: 90,
      },
      {
        userName: "Gelin",
        payMoney: 20,
      },
      {
        userName: "Roland",
        payMoney: 2000000,
      },
    ]

    console.log(PayCollect);
    // 設定第一個 payMoney的金額做 起始比較值

    let PayMost = [];
    PayMost.push({
      userName: PayCollect[0].userName,
      payMoney: PayCollect[0].payMoney,
    })
    let TestMoney = PayMost[0].payMoney;
    let SecondBill = PayCollect[1].payMoney;


    if (TestMoney > SecondBill) {
      console.log(TestMoney);
    }
    else {
      console.log(SecondBill);
    }


    let vipUser = [];

    for (let data of PayCollect){
      if (data.payMoney >=200){
        vipUser.push(data.userName);
      }
    }

    console.log(vipUser);






    // console.log(PayCollect[i].userName + "花最多錢");




  }


  // BmiTester(weight :number, height :number)
  //   var BMI = weight / (height * height);


  // )




}

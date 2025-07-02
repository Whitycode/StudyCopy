import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-userpage',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './userpage.html',
  styleUrl: './userpage.scss'
})
export class Userpage {




  NumData = [10, 20, 3, 5, 8, 9, 23, 657, 123, 67];



  userArray = [
    {
      userName: '玩家A',
      lev: 10,
      props: [
        {
          propsName: '蘑菇',
          amount: 5
        },
        {
          propsName: '金幣',
          amount: 15
        },
      ]
    },
    // {
    //   userName: '玩家B',
    //   lev: 15,
    //   props: [
    //     {
    //       propsName: '龜殼',
    //       amount: 1
    //     },
    //     {
    //       propsName: '砲彈',
    //       amount: 15
    //     },
    //   ]
    // }
  ]












  ngOnInit(): void {

    let NumData = [10, 20, 3, 5, 8, 9, 23, 657, 123, 67];
    for (let i = 0; i < NumData.length; i++) {
      if (NumData[i] == 9) {
        console.log((i));
        console.log(NumData.slice(5, 6));
      }
    }

    for (let data of this.NumData) {
      console.log(data);
    }

    // TypeScript 寫法
    // 設置一個 變數 跑到第一層 JSON
    // 要再往 子JSON下去 在定義一個變數
    // 檢索要記得用上一層定義的變數
    for (let data of this.userArray) {
      console.log(data);

      for (let data2 of data.props)
        console.log(data2.propsName);
    }

    // for (let i = 0 ; i <this.userArray.length ; i++){
    //   console.log(this.userArray[i]);
    // }











  }
}

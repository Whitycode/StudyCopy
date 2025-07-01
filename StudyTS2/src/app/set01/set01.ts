import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-set01',
  imports: [
    FormsModule
  ],
  templateUrl: './set01.html',
  styleUrl: './set01.scss'
})
export class Set01 {

  // Class裡面定義的變數 都是全域變數
  // 定義 初始等級 攻擊 防禦力
  levelStart: number = 1;
  Attack: number = 10;
  Defense: number = 10;



  // levelCount() 是 方法 methed
  // levelCount() {} 裡面設定的變數都是區域變數
  // 在方法裡面執行完就不生效了

  // 等級提升技能值設定公式
  levelCount() {
    this.levelStart = this.levelStart + 1;
    this.Attack = this.Attack + 3;
    this.Defense = this.Defense + 2;
  }

  // 等級降級 // 需要再 等級為 1時停止操作
  levelDown() {

    let NowLevel = Number(this.levelStart);
    // 判斷等級是否為 1
    // 否則等級大於 1時 可以繼續執行
    if (NowLevel <= 1) {
      return;
    }
    else {
      this.levelStart = this.levelStart - 1;
      this.Attack = this.Attack - 3;
      this.Defense = this.Defense - 2;
    }
  }


  levelDownT() {
    console.log(this.levelStart);
  }

  //這是 input給使用者輸入的欄位
  userSet: String = "";

  Setlevel(): void {
    console.log(this.userSet);
  }

  // 設定一個布林值 檢測使用者是否按下過修改等級鍵
  hasRun: boolean = false;

  RunSet() {
    // 有執行過等於 ture 才會會執行第一格判斷
    if (this.hasRun) {

      return;
    }
    // else其實可以不用寫 因為已經包在方法裡了
    else {
      // 因為我 userSet 初始使設定字串 所以要轉成數字才能計算
      let SetNewNum
      SetNewNum = Number(this.userSet);
      // 雙向繫結 改變目前的等級
      this.levelStart = Number(this.userSet);

      this.Attack = this.Attack + 3 * SetNewNum;
      this.Defense = this.Defense + 2 * SetNewNum;
      //執行完後要將 hasRun 改為Ture 才不會再繼續觸發這裡的判斷式
      this.hasRun = true;
    }
  }

  // 讓修改按鈕可以再重新執行
  RunReset() {
    // 需要重製 hasRun 讓 RunSet() 可以再次執行
    // 等級記得重製 不然會輸入執會疊加
    this.hasRun = false;
    this.levelRestart();
    this.RunSet();
  }

  // 重製按鈕 全部改為初始值
  levelRestart() {

    this.levelStart = 1;
    this.Attack = 10;
    this.Defense = 10;
    this.hasRun = false;

  }


}

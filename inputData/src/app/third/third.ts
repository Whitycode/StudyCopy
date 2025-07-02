import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-third',
  imports: [
    FormsModule
  ],
  templateUrl: './third.html',
  styleUrl: './third.scss'
})
export class Third {

  levelStart: number = 1;
  Attack: number = 10;
  Defense: number = 10;
  userSet: string = "";

  job: number = 1 ;

  levelUp() {
    this.levelStart = this.levelStart + 1;
    this.Attack = this.Attack + 3;
    this.Defense = this.Defense + 2;
  }

  levelDown() {
    let NowLevel = Number(this.levelStart);
    if (NowLevel <= 1) {
      return;
    }
    else {
      this.levelStart = this.levelStart - 1;
      this.Attack = this.Attack - 3;
      this.Defense = this.Defense - 2;
    }
  }

  // 重置等級
  levelRestart(){
    this.levelStart = 1;
    this.Attack = 10;
    this.Defense = 10;
  }

  CheckSet(){
    // 不先重置 等級會疊加
    this.levelRestart();
    // if(變數) 如果有變數會執行
    // 但 我這裡是打 !變數 所以等於沒有變數 執行判斷式
    if(!this.userSet){
      return;
    }
    else{

    let SetLevel
    SetLevel = Number(this.userSet);
    this.levelStart = Number(this.userSet);
    this.Attack = this.Attack + 3 * SetLevel;
    this.Defense = this.Defense + 2 * SetLevel;

    }

  }







}

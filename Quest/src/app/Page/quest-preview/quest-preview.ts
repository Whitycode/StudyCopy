import { FormsModule } from '@angular/forms';
import { Teleport } from './../../@service/teleport';
import { Component } from '@angular/core';
import { QuestForm } from '../../Interface/interface/interface';

@Component({
  selector: 'app-quest-preview',
  imports: [
    FormsModule
  ],
  templateUrl: './quest-preview.html',
  styleUrl: './quest-preview.scss'
})
export class QuestPreview {
  ImgPirate = "pirate.jpg";

  inputText01 = "";
  inputText02 = "";
  inputText03 = "";

  QuestPage: QuestForm[] = [];

  // 放轉存過來的 QcID 編號字串
  QcID = "";


  constructor(
    private Teleport: Teleport
  ) { }

  ngOnInit(): void {
    this.QuestPage = this.Teleport.HelperJSONFile
    console.log("service資料", this.Teleport.HelperJSONFile);
    console.log(this.QuestPage);


  }


}

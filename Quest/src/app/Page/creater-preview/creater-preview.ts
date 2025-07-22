import { Answer, Question, QuestForm } from './../../Interface/interface/interface';
import { Teleport } from './../../@service/teleport';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-creater-preview',
  imports: [
    FormsModule
  ],
  templateUrl: './creater-preview.html',
  styleUrl: './creater-preview.scss'
})
export class CreaterPreview {

  ImgGirl = "QuestGirl2.png"

  inputText01 = "";
  inputText02 = "";
  inputText03 = "";

  QuestPage: QuestForm[] = [];

  constructor(private Teleport: Teleport) { }

  DataSend(){

    this.QuestPage = this.Teleport.createrJSON;

    this.Teleport.HelperJSONFile.push(this.QuestPage[0]);
    console.log("上傳成功",this.Teleport.HelperJSONFile);
  }

  ngOnInit(): void {
    this.QuestPage = this.Teleport.createrJSON;
    console.log(this.QuestPage);

    this.inputText01 = this.Teleport.inputText01;
    this.inputText02 = this.Teleport.inputText02;
    this.inputText03 = this.Teleport.inputText03;


  }
}

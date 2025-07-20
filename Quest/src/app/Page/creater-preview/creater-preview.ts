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






QuestPage: QuestForm[]=[];

  constructor(private Teleport: Teleport) { }



  ngOnInit(): void {
    this.QuestPage = this.Teleport.createrJSON;
    console.log(this.QuestPage);

  }
}

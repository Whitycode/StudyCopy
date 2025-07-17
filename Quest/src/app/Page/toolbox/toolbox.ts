import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbox',
  imports: [ FormsModule],
  templateUrl: './toolbox.html',
  styleUrl: './toolbox.scss'
})
export class Toolbox {

 userName!: string;
  userPhone!: string;
  userEmail!: string;

  userInput!: string;



  JsonData2 = {
    Title: "標題名稱",
    QusetTitle: "你喜歡甚麼類型",
    intputQType: "Checkbox",
    optionName: ["大姊姊", "大姊姊*2", "還是大姊姊"]
  }

  RadioQuestions: {
    name: string;
    option: any[];
    value: string;
    boolean: false;
  }[] = [
      {
        name: '',
        option: [],
        value: '',
        boolean: false
      }
    ];

    JsonData = {
    Title: "標題名稱",
    QusetTitle: "5 + 5 =",
    intputQType: "Radio",
    optionName: [6, 5, 3, 10]
  }

  CheckQuestions: {
    name: string;
    option: any[];
    value: string;
    selected: boolean[];
  }[] = [
      {
        name: '',
        option: [],
        value: '',
        selected: [false,false,false]
      }
    ];


    JsonDataI = {
    Title: "標題名稱",
    QusetTitle: "你說啥",
    intputQType: "input",
    optionName: [6, 5, 3, 10]
  }


  InputQuestions: {
    name: string;
    option: string;
    value: string;
    boolean: false;
  }[] = [
      {
        name: '',
        option: "男到，這是你的回答?",
        value: '',
        boolean: false
      }
    ];

}

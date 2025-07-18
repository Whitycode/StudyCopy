import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbox',
  imports: [FormsModule],
  templateUrl: './toolbox.html',
  styleUrl: './toolbox.scss'
})
export class Toolbox {
  imgQGirl="QuestGirls.png"

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
        selected: [false, false, false]
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



  問卷編號01 = [
    {
      問卷名稱: "測試名子",
      創作者名稱: "測試員01",
      第一題: {
        問題名稱: "xxx",
        這題題目類型: "input",
        anser: [{ value1: "a", value2: "b", value3: "c" }]
      },
      第二題: {
        問題名稱: "xxx",
        這題題目類型: "radio",
        anser: [{ value1: "a", value2: "b", value3: "c" }]
      },
      第三題: {
        問題名稱: "xxx",
        這題題目類型: "checkbox",
        anser: [{ value1: "a", value2: "b", value3: "c" }]
      }
    }
  ];




  // JSON 命名樣式
  QuestNum0000 = [
    {
      Title: "問卷名稱",
      creatorName: "測試員01",
      Question01: {
        QuestTitle: "請輸入任意文字",
        QType: "input",
        anser: [
          { value: "使用者輸入了這些東東" }
        ]
      },
      Question02: {
        QuestTitle: "單選題問題",
        QType: "radio",
        anser: [
          { value: "a", select: "Y", boolean: false },
          { value: "b", select: "N", boolean: false },
          { value: "c", select: "N", boolean: false }
        ]
      },
      Question03: {
        QuestTitle: "可以單選或複選",
        QType: "checkbox",
        anser: [
          { value: "大姊姊", select: false },
          { value: "大姊姊", select: true },
          { value: "大姊姊*2", select: true }
        ]
      }
    }
  ];


  QuestPage = this.QuestNum0000[0]

  test = "Y";

  ngOnInit(): void {
    console.log(this.QuestNum0000);
  }













}

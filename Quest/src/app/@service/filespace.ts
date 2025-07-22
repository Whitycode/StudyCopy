import { Injectable } from '@angular/core';
import { QuestForm } from '../Interface/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class Filespace {


  QuestPage: QuestForm[] = [
    {
      CreatorData: [
        {
          QuestID: "QcID-0001",
          Title: "問卷名稱t",
          Directions: "問卷描述",
          CreatorID: "創建者01",
          StartTime: "2025-07-10",
          EndTime: "2025-08-06",
        }
      ],
      HelperData: [
        {
          HelperName: "",
          HelperPhone: "",
          HelperEmail: "",
        }
      ],
      QuestList: [
        {
          QuestionNumber: "QNum0",
          QuestTitle: "說說對本次問卷排版的想法:",
          QType: "input",
          answer: [
            { value: "", select: "N", boolean: false }
          ],userAnswer:""
        },
        {
          QuestionNumber: "QNum1",
          QuestTitle: "你比較喜歡甚麼動物:",
          QType: "radio",
          answer: [
            { value: "狗狗", select: "N", boolean: false },
            { value: "貓貓", select: "N", boolean: false },
          ]
        },
        {
          QuestionNumber: "QNum2",
          QuestTitle: "喜歡做的事情",
          QType: "checkbox",
          answer: [
            { value: "畫圖畫到忘記時間", select: "N", boolean: false },
            { value: "程式寫到天荒地老", select: "N", boolean: false },
          ]
        }
      ]
    },
    {
      CreatorData: [
        {
          QuestID: "QcID-0002",
          Title: "問卷名稱x",
          Directions: "問卷描述",
          CreatorID: "創建者02",
          StartTime: "2025-08-11",
          EndTime: "2025-09-17",
        }
      ],
      HelperData: [
        {
          HelperName: "",
          HelperPhone: "",
          HelperEmail: "",
        }
      ],
      QuestList: [
        {
          QuestionNumber: "QNum1",
          QuestTitle: "請輸入任意文字",
          QType: "input",
          answer: [
            { value: "文字哈哈", select: "N", boolean: false }
          ]
        },
        {
          QuestionNumber: "QNum1",
          QuestTitle: "殘酷 2選1",
          QType: "radio",
          answer: [
            { value: "今天Demo", select: "N", boolean: false },
            { value: "天天颱風天", select: "N", boolean: false },
          ]
        },
        {
          QuestionNumber: "QNum2",
          QuestTitle: "今天想吃啥",
          QType: "checkbox",
          answer: [
            { value: "7-11", select: "N", boolean: false },
            { value: "return 便當", select: "N", boolean: false },
          ]
        }
      ]
    },
    {
      CreatorData: [
        {
          QuestID: "QcID-0003",
          Title: "問卷名稱2",
          Directions: "問卷描述",
          CreatorID: "創建者02",
          StartTime: "2025-08-11",
          EndTime: "2025-09-17",
        }
      ],
      HelperData: [
        {
          HelperName: "",
          HelperPhone: "",
          HelperEmail: "",
        }
      ],
      QuestList: [
        {
          QuestionNumber: "QNum1",
          QuestTitle: "請輸入任意文字",
          QType: "input",
          answer: [
            { value: "", select: "N", boolean: false }
          ]
        },
        {
          QuestionNumber: "QNum1",
          QuestTitle: "單選題",
          QType: "radio",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },
        {
          QuestionNumber: "QNum2",
          QuestTitle: "複選題",
          QType: "checkbox",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        }
      ]
    },
    {
      CreatorData: [
        {
          QuestID: "QcID-0004",
          Title: "問卷名稱s",
          Directions: "問卷描述",
          CreatorID: "創建者02",
          StartTime: "2025-08-11",
          EndTime: "2025-09-17",
        }
      ],
      HelperData: [
        {
          HelperName: "",
          HelperPhone: "",
          HelperEmail: "",
        }
      ],
      QuestList: [
        {
          QuestionNumber: "QNum1",
          QuestTitle: "請輸入任意文字",
          QType: "input",
          answer: [
            { value: "", select: "N", boolean: false }
          ]
        },
        {
          QuestionNumber: "QNum1",
          QuestTitle: "單選題",
          QType: "radio",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },
        {
          QuestionNumber: "QNum2",
          QuestTitle: "複選題",
          QType: "checkbox",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        }
      ]
    },
    {
      CreatorData: [
        {
          QuestID: "QcID-0005",
          Title: "問卷名稱v",
          Directions: "問卷描述",
          CreatorID: "創建者02",
          StartTime: "2025-08-11",
          EndTime: "2025-09-17",
        }
      ],
      HelperData: [
        {
          HelperName: "",
          HelperPhone: "",
          HelperEmail: "",
        }
      ],
      QuestList: [
        {
          QuestionNumber: "QNum1",
          QuestTitle: "請輸入任意文字",
          QType: "input",
          answer: [
            { value: "", select: "N", boolean: false }
          ]
        },
        {
          QuestionNumber: "QNum1",
          QuestTitle: "單選題",
          QType: "radio",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },
        {
          QuestionNumber: "QNum2",
          QuestTitle: "複選題",
          QType: "checkbox",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        }
      ]
    },
    {
      CreatorData: [
        {
          QuestID: "QcID-0006",
          Title: "問卷名稱c",
          Directions: "問卷描述",
          CreatorID: "創建者02",
          StartTime: "2025-08-11",
          EndTime: "2025-09-17",
        }
      ],
      HelperData: [
        {
          HelperName: "",
          HelperPhone: "",
          HelperEmail: "",
        }
      ],
      QuestList: [
        {
          QuestionNumber: "QNum1",
          QuestTitle: "請輸入任意文字",
          QType: "input",
          answer: [
            { value: "", select: "N", boolean: false }
          ]
        },
        {
          QuestionNumber: "QNum1",
          QuestTitle: "單選題",
          QType: "radio",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },
        {
          QuestionNumber: "QNum2",
          QuestTitle: "複選題",
          QType: "checkbox",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        }

      ]
    },
    {
      CreatorData: [
        {
          QuestID: "QcID-0007",
          Title: "問卷名稱8",
          Directions: "問卷描述",
          CreatorID: "創建者02",
          StartTime: "2025-08-11",
          EndTime: "2025-09-17",
        }
      ],
      HelperData: [
        {
          HelperName: "",
          HelperPhone: "",
          HelperEmail: "",
        }
      ],
      QuestList: [
        {
          QuestionNumber: "QNum1",
          QuestTitle: "請輸入任意文字",
          QType: "input",
          answer: [
            { value: "", select: "N", boolean: false }
          ]
        },
        {
          QuestionNumber: "QNum1",
          QuestTitle: "單選題",
          QType: "radio",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },
        {
          QuestionNumber: "QNum2",
          QuestTitle: "複選題",
          QType: "checkbox",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },

      ]
    },
    {
      CreatorData: [
        {
          QuestID: "QcID-0008",
          Title: "問卷名稱q",
          Directions: "問卷描述",
          CreatorID: "創建者02",
          StartTime: "2025-08-11",
          EndTime: "2025-09-17",
        }
      ],
      HelperData: [
        {
          HelperName: "",
          HelperPhone: "",
          HelperEmail: "",
        }
      ],
      QuestList: [
        {
          QuestionNumber: "QNum1",
          QuestTitle: "請輸入任意文字",
          QType: "input",
          answer: [
            { value: "", select: "N", boolean: false }
          ]
        },
        {
          QuestionNumber: "QNum1",
          QuestTitle: "單選題",
          QType: "radio",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },
        {
          QuestionNumber: "QNum2",
          QuestTitle: "複選題",
          QType: "checkbox",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },

      ]
    },
    {
      CreatorData: [
        {
          QuestID: "QcID-0009",
          Title: "問卷名稱g",
          Directions: "問卷描述",
          CreatorID: "創建者02",
          StartTime: "2025-08-11",
          EndTime: "2025-09-17",
        }
      ],
      HelperData: [
        {
          HelperName: "",
          HelperPhone: "",
          HelperEmail: "",
        }
      ],
      QuestList: [
        {
          QuestionNumber: "QNum1",
          QuestTitle: "請輸入任意文字",
          QType: "input",
          answer: [
            { value: "", select: "N", boolean: false }
          ]
        },
        {
          QuestionNumber: "QNum1",
          QuestTitle: "單選題",
          QType: "radio",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },
        {
          QuestionNumber: "QNum2",
          QuestTitle: "複選題",
          QType: "checkbox",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },

      ]
    },{
      CreatorData: [
        {
          QuestID: "QcID-0010",
          Title: "問卷名稱4",
          Directions: "問卷描述",
          CreatorID: "創建者02",
          StartTime: "2025-08-11",
          EndTime: "2025-09-17",
        }
      ],
      HelperData: [
        {
          HelperName: "",
          HelperPhone: "",
          HelperEmail: "",
        }
      ],
      QuestList: [
        {
          QuestionNumber: "QNum1",
          QuestTitle: "請輸入任意文字",
          QType: "input",
          answer: [
            { value: "", select: "N", boolean: false }
          ]
        },
        {
          QuestionNumber: "QNum1",
          QuestTitle: "單選題",
          QType: "radio",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },
        {
          QuestionNumber: "QNum2",
          QuestTitle: "複選題",
          QType: "checkbox",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },

      ]
    },{
      CreatorData: [
        {
          QuestID: "QcID-0011",
          Title: "問卷名稱s",
          Directions: "問卷描述",
          CreatorID: "創建者02",
          StartTime: "2025-08-11",
          EndTime: "2025-09-17",
        }
      ],
      HelperData: [
        {
          HelperName: "",
          HelperPhone: "",
          HelperEmail: "",
        }
      ],
      QuestList: [
        {
          QuestionNumber: "QNum1",
          QuestTitle: "請輸入任意文字",
          QType: "input",
          answer: [
            { value: "", select: "N", boolean: false }
          ]
        },
        {
          QuestionNumber: "QNum1",
          QuestTitle: "單選題",
          QType: "radio",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },
        {
          QuestionNumber: "QNum2",
          QuestTitle: "複選題",
          QType: "checkbox",
          answer: [
            { value: "", select: "N", boolean: false },
            { value: "", select: "N", boolean: false },
          ]
        },

      ]
    }
  ]


  constructor() { }


  ngOnInit(): void {




  }
}

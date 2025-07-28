
//公用 interface 只需要寫這樣

// JSON 空包裹 interface
export interface Answer {
  value: string;
  boolean: boolean;
  require: boolean;
}


// 因為 radio是需要抓字串，現在是額外多了一個userAnswer給它用
// 之後要再整理 JSON格式
export interface Question {
  QuestionNumber: string;
  QuestTitle: string;
  QType: string;
  answer: Answer[];  // 用到上面的 Answer 型別
  radioAnswer: string; // userAnswer 抓 radio是否勾選; 有勾選會傳 value的字串
}

export interface Creator {
  QuestID: string;
  Title: string;
  Directions: string;
  CreatorID: string;
  StartTime: string;
  EndTime: string;
}

export interface Helper {
  HelperName: string;
  HelperPhone: string;
  HelperEmail: string;
}

export interface QuestForm {
  CreatorData: Creator[];
  HelperData: Helper[];
  QuestList: Question[];  // 用到上面的 Question 型別
}



// 整理的 精簡 JSON 空包裹
// QuestPage: QuestForm[] = [
//   {
//     CreatorData: [
//       {
//         QuestID: "",
//         Title: "",
//         Directions: "",
//         CreatorID: "",
//         StartTime: "",
//         EndTime: "",
//       }
//     ],
//     HelperData: [
//       {
//         HelperName: "",
//         HelperPhone: "",
//         HelperEmail: "",
//       }
//     ],
//     QuestList: [
//       {
//         QuestionNumber: "QNum0",
//         QuestTitle: "請輸入任意文字",
//         QType: "",
//         radioAnsewr:"",
//         answer: [
//           { value: "", boolean: false, require: false },
//           { value: "", boolean: false, require: false }

//         ]
//       }
//     ]
//   }
// ]


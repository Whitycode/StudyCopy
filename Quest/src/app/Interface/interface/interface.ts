
//公用 interface 只需要寫這樣

// JSON 空包裹 interface
export interface Answer {
  value: string;
  select: string;
  boolean: boolean;
}

export interface Question {
  QuestionNumber: string;
  QuestTitle: string;
  QType: string;
  answer: Answer[];  // 用到上面的 Answer 型別
  userAnswer?: string;
}

export interface QuestForm {
  Title: string;
  QuestID: string;
  creatorName: string;
  QuestList: Question[];  // 用到上面的 Question 型別
}

//  整理的 精簡 JSON 空包裹
// QuestPage:QuestForm[] = [
//   {
//     Title: "",
//     QuestID: "QcID0001",
//     creatorName: "測試員01",
//     QuestList: [
//       {
//         QuestionNumber: "QNum0",
//         QuestTitle: "請輸入任意文字",
//         QType: "",
//         answer: [
//           { value: "", select: "N", boolean: false }
//         ]
//       }
//     ]
//   }
// ]


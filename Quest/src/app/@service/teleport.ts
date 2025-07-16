import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Teleport {

  userName:string = "";
  userPhone:string = "";
  userEmail:string = "";

  userInput:string = "";

  IntData:string = "";
  RadioData:string = "";
  CheckData:string = "";

  constructor() { }
}

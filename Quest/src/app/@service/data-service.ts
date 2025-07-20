import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userName:string = "";
  userPhone:string = "";
  userEmail:string = "";

  userInput:string = "";

  IntData:string = "";


  constructor() { }
}

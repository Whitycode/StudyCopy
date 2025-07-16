import { Teleport } from './../../@service/teleport';
import { Component } from '@angular/core';

@Component({
  selector: 'app-preview',
  imports: [],
  templateUrl: './preview.html',
  styleUrl: './preview.scss'
})
export class Preview {
  userName!: string;
  userPhone!: string;
  userEmail!: string;

  userInput!:string;



  constructor(private Teleport: Teleport) { }

  ngOnInit(): void {
    this.userName = this.Teleport.userName;
    this.userPhone = this.Teleport.userPhone;
    this.userEmail = this.Teleport.userEmail;

    this.userInput = this.Teleport.userInput;



  }

}

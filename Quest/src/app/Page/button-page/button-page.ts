import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button-page',
  imports: [
    FormsModule
  ],
  templateUrl: './button-page.html',
  styleUrl: './button-page.scss'
})
export class ButtonPage {




  InputNumber = 0;
  RadioNumber = 0;
  CheckboxNumber = 0;


  Radios: string[] = [];
  Checkboxs: string[] = [];

  choseBox: { type: 'input' | 'radio' | 'checkbox'; Value: any }[] = [];


  addInputButton() {
    // this.InputB = !this.InputB ;
    this.choseBox.push({ type: "input", Value: + this.InputNumber });
    this.InputNumber = this.InputNumber + 1;
    console.log("Int", this.InputNumber);
  }
  addRadioButton() {
    this.choseBox.push({ type: "radio", Value: + this.RadioNumber });
    this.RadioNumber = this.RadioNumber + 1;
    console.log("Radio", this.RadioNumber);
  }
  addCheckboxButton() {
    this.choseBox.push({ type: "checkbox", Value: + this.CheckboxNumber });
    this.CheckboxNumber = this.CheckboxNumber + 1;
    console.log("Checkbox", this.CheckboxNumber);
  }


  ngONInit(): void {

    console.log(this.choseBox);
  }






}

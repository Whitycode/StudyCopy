import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbox',
  imports: [
    FormsModule
  ],
  templateUrl: './toolbox.html',
  styleUrl: './toolbox.scss'
})
export class Toolbox {
 InputNumber = 0;
  RadioNumber = 0;
  CheckboxNumber = 0;




  choseBox: { type: 'input' | 'radio' | 'checkbox'; Value: any }[] = [];





}

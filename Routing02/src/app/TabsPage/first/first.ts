import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule],
  templateUrl: './first.html',
  styleUrl: './first.scss'
})
export class First {
  // 下拉是選單的值
  selectData! : string;

}

import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExampleService } from './../@services/example.service';

@Component({
  selector: 'app-first',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './first.html',
  styleUrl: './first.scss'
})
export class First {

  userName: string = "";
  userEmail: string = "";
  userPhone: string = "";



  constructor(
    private router: Router,
    private exampleService: ExampleService
  ) { }
  // 建構式名子要打對 會影響到後面變數的名稱

  ngOnInit(): void {
  }

  TabName() {
    this.exampleService.memberData = {
      userName: this.userName,
      userEmail: this.userEmail,
      userPhone: this.userPhone,
    }
  }

  // 變更頁面 可以在方法的括弧 設定參數宣告 拿來頁面使用
  changPage(url: string) {
    this.router.navigate([url])
  }



}

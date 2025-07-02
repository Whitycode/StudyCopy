import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ExampleService } from './../@services/example.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './second.html',
  styleUrl: './second.scss'
})
export class Second {

  userName: string = "";
  userEmail: string = "";
  userPhone: string = "";


  @Input() userNameOut!: string;




  constructor(
    private router: Router,
    private exampleService: ExampleService
  ) { }

  //ngOnInt 頁面設定初始值/抓資料 會寫在這裡
  ngOnInit(): void {
    // let userName2 = this.exampleService.userName2;
    // console.log(userName2);


    // 讓second 這邊 能接收到 Service 的 userName 的值
    // first 輸入 > Service 接收 > 傳遞到 second
    this.userName = this.exampleService.userName;
    this.userEmail = this.exampleService.userEmail;
    this.userPhone = this.exampleService.userPhone;

    // // !this.userName 式表示這判斷式裡面沒有值
    // if (!this.userNameOut) {
    //   this.userNameOut = "Whity";
    // }


  }






}



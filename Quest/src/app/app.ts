import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Quest';

  constructor(private router:Router){}

 ngOnInit() {

  // 跳轉至元件
    // this.router.navigateByUrl('/');
    // this.router.navigateByUrl('/Test');


 }



}

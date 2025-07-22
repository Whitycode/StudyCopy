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

  imgJason: string = "jason-statham.jpg"
  imgJSON: string = "JsonPage2.png"

  constructor(private router: Router) { }

  ngOnInit() {

    // 跳轉至元件
    // this.router.navigateByUrl('/Home');
    this.router.navigateByUrl('/ButtonPage');
    // this.router.navigateByUrl('/Testpage');
    // this.router.navigateByUrl('/preview');
    // this.router.navigateByUrl('/createrPreview');
    // this.router.navigateByUrl('/Test');
    // this.router.navigateByUrl('/QuestPage');





  }



}

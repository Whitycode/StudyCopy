import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { First } from '../../TabsPage/first/first';
import { Second } from '../../TabsPage/second/second';
import { Third } from '../../TabsPage/third/third';

@Component({
  selector: 'app-page02',
  imports: [
    // 在page02 注入元件 Tabs網頁
    First,
    Second,
    Third,
    // 在page02 注入元件 Tabs網頁
    MatTabsModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './page02.html',
  styleUrl: './page02.scss'
})
export class Page02 {

  constructor(private router:Router){}



  links= [
    {path:'第一頁',pathUrl: '/page02/first'},
    {path:'第二頁',pathUrl: '/page02/second'},
    {path:'第三頁',pathUrl: '/page02/third'},
  ]

  activeLink = this.links[0].path;

//   addLink() {
//     this.links.push(`Link ${this.links.length + 1}`);
//   }
}

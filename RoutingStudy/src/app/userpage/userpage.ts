import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-userpage',
  imports: [

    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './userpage.html',
  styleUrl: './userpage.scss'
})
export class Userpage {

}

import { Routes } from '@angular/router';
import { First } from './first/first';
import { Second } from './second/second';
import { Userpage } from './userpage/userpage';
import { Third } from './third/third';



export const routes: Routes = [
  {
    path: 'first', component: First,
    children:[
      {path:'userpage',  component: Userpage }
    ]
  },
  { path: 'second', component: Second },
  { path: 'third', component: Third },

];

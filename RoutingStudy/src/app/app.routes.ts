
// 引用網址記得 import
import { Routes } from '@angular/router';
import { First } from './first/first';
import { Second } from './second/second';
import { Userpage } from './userpage/userpage';



// routes這個陣列是用來寫 routes路由的設定
export const routes: Routes = [
  // path 是設定網址的名稱 component 是要顯示網址的名稱
  {
    path: 'first', component: First,
    children:[
      {path:'userpage',  component: Userpage }
    ]
  },
  { path: 'second', component: Second },

  //當pathMatch 設定為full
  // path: ''網址 '' 命名路徑需要全部完全一樣才會重新導向
  // 比方說 http://localhost:4200/second/test
  // second/test 都要打出來

  //當pathMatch 設定為prefix
  //網址輸入的第一層要一樣才會重新導向
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  // { path: 'atc', redirectTo: '/second', pathMatch: 'prefix' },

  // { path: 'first', component: First ,
  //   children: [
  //     {path: 'second', component: Second,}
  //   ]
  // },


  // { path: '**', component: Second }
  // 當 path為**時 網址隨便打會顯示你設定的網域頁面
  // ** 需要設定在最底下
];

import { Routes } from '@angular/router';
import { CreatePage } from './Page/create-page/create-page';
import { Home } from './Page/home/home';
import { Test } from './Page/test/test';
import { Preview } from './Page/preview/preview';

export const routes: Routes = [
  // 這是綁定首頁
  // { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: "Home", component: Home },
  { path: "createPage", component: CreatePage },
  { path: "Test", component: Test },
  // 之後把 Preview 綁成子路由
  { path: "preview", component: Preview }
];

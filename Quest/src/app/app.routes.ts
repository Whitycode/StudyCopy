import { Routes } from '@angular/router';
import { CreatePage } from './Page/create-page/create-page';
import { Home } from './Page/home/home';
import { Test } from './Page/test/test';
import { Preview } from './Page/preview/preview';
import { Toolbox } from './Page/toolbox/toolbox';
import { ButtonPage } from './Page/button-page/button-page';
import { Testpage } from './Page/testpage/testpage';
import { CreaterPreview } from './Page/creater-preview/creater-preview';
import { QuestPage } from './Page/quest-page/quest-page';

export const routes: Routes = [
  // 這是綁定首頁
  // { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: "Home", component: Home },
  { path: "createPage", component: CreatePage },
  { path: "Test", component: Test },
  // 之後把 Preview 綁成子路由
  { path: "preview", component: Preview },
  { path: "Toolbox", component: Toolbox },
  { path: "ButtonPage", component: ButtonPage },
  { path: "Testpage", component: Testpage },
  { path: "createrPreview", component:CreaterPreview},

  // 答題頁面
  { path: "QuestPage",component:QuestPage},
  // 切到答題頁面/問卷編號子路由
  {path: 'QuestPage/:id',component: QuestPage}
];

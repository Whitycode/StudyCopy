import { Routes } from '@angular/router';
import { Page01 } from './Page/page01/page01';
import { Page02 } from './Page/page02/page02';
import { Table01 } from './Page/table01/table01';
import { First } from './TabsPage/first/first';
import { Second } from './TabsPage/second/second';
import { Third } from './TabsPage/third/third';



export const routes: Routes = [
  {path:'page01',component:Page01},
  {path:'page02',component:Page02,
    children:[
      {path:'first',component:First},
      {path:'second',component:Second},
      {path:'third',component:Third}
  ],
  },
  {path:'Table01',component:Table01}
];

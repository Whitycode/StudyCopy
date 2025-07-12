import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table01',
  imports: [
    MatTableModule,
    MatPaginatorModule,
    FormsModule],
  templateUrl: './table01.html',
  styleUrl: './table01.scss'
})

//import 少了 AfterViewInit
export class Table01 {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // 使用者輸入搜尋的變數
  FindData!: string;


  // paginator頁面
  // 變數一開始沒有值 但要使用他記得加 !
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // 這裡是 input 使用到的方法
  inputDataFind() {
    // input 設定了 (keyup) 之後
    // 使用者在 input輸入任何字元都會執行一次
    console.log(this.FindData);

    // 宣告一個空的陣列 擺放符合的資料
    let DataSearch = [];
    // 用迴圈 搭配 indexOf 如果沒有符合的值index會回傳-1
    // 所以下面寫法是指 當有符合的字串才做動作
    for (let data of ELEMENT_DATA){
      if (data.name.indexOf(this.FindData)!= -1) {
        DataSearch.push(data);
      }
    }
     console.log(DataSearch);
     // 意思是從下面陣列的範例中 模糊搜尋
     // 然後再將搜尋到的塞進Table的陣列顯示
     this.dataSource.data =  DataSearch;

  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

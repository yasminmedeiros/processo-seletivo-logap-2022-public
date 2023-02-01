import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/service/category/category.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryInterface } from 'src/app/interfaces/category';

@Component({
  selector: 'app-table-all-category',
  templateUrl: './table-all-category.component.html',
  styleUrls: ['./table-all-category.component.css']
})
export class TableAllCategoryComponent  implements OnInit{
  public categoryList:CategoryInterface[] = [];
  displayedColumns: string[] = ['name', 'buttons'];
  dataSource:any;
  constructor(private category:CategoryService,
    private _liveAnnouncer: LiveAnnouncer){ }
  ngOnInit(): void {
    this.category.get()
      .subscribe(res=>{
        this.categoryList = res;
      })
    this.dataSource = new MatTableDataSource(this.categoryList);

  }
  @ViewChild(MatSort) sort: MatSort | undefined;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  delete(id:number) {
    this.category.deleteData(`${id}`)
      .subscribe(response => {
        console.log(response);
      })
    location.reload();

  }
}

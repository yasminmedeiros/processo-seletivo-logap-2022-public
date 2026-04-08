import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/service/category/category.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
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
  dataSource = new MatTableDataSource<CategoryInterface>([]);
  constructor(private category:CategoryService,
    private _liveAnnouncer: LiveAnnouncer){ }
  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.category.get()
      .subscribe(res=>{
        this.categoryList = res;
        this.dataSource = new MatTableDataSource(this.categoryList);
        this.dataSource.sort = this.sort ?? null;
        this.dataSource.paginator = this.paginator ?? null;
      })
  }

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort ?? null;
    this.dataSource.paginator = this.paginator ?? null;
  }
  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  delete(id:number) {
    this.category.deleteData(`${id}`).subscribe(()=>{
      this.loadCategories();
     })
  }
}

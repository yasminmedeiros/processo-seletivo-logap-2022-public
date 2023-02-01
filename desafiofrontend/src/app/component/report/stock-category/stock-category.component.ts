import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/service/category/category.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryInterface,CategoryStockInterface } from 'src/app/interfaces/category';
import { ProductInterface } from 'src/app/interfaces/product';

@Component({
  selector: 'app-stock-category',
  templateUrl: './stock-category.component.html',
  styleUrls: ['./stock-category.component.css']
})
export class StockCategoryComponent implements OnInit{
  public categoryList:CategoryStockInterface[] = [];
  displayedColumns: string[] = ['name', 'productsLenght'];
  dataSource:any;
  constructor(private category:CategoryService,
    private _liveAnnouncer: LiveAnnouncer){ }
  ngOnInit(): void {
    const arrayCategory:CategoryStockInterface[] = [];
    this.category.get()
      .subscribe(res=>{
        res.map((val:CategoryInterface)=>{
          let sum = 0;
          val.products.map((value:ProductInterface)=>{
            sum+=value.quantity;
          })
          arrayCategory.push({
            name: val.name,
            productsLenght: sum
          })
        })
        this.categoryList=arrayCategory;    
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

/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ProductInterface } from 'src/app/interfaces/product';



@Component({
  selector: 'app-table-all-products',
  templateUrl: './table-all-products.component.html',
  styleUrls: ['./table-all-products.component.css']
})
export class TableAllProductsComponent  implements OnInit{
  
  public productList:ProductInterface[] = [];
  displayedColumns: string[] = ['name', 'value_send', 'value_buy', 'quantity','quantity_minimum','buttons'];
  dataSource = new MatTableDataSource<ProductInterface>([]);
  constructor(private product:ProductService,
    private _liveAnnouncer: LiveAnnouncer){ }
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.product.get()
      .subscribe(res=>{
        this.productList = res;
        this.dataSource = new MatTableDataSource(this.productList);
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
    this.product.deleteData(`${id}`)
      .subscribe(() => {
        this.loadProducts();
      })

  }
    
}

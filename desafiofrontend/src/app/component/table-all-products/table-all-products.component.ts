/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
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
  dataSource:any;
  constructor(private product:ProductService,
    private _liveAnnouncer: LiveAnnouncer){ }
  ngOnInit(): void {
    this.product.getProduct()
      .subscribe(res=>{
        this.productList = res;
      })
    this.dataSource = new MatTableDataSource(this.productList);

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
    this.product.deleteData(`${id}`)
      .subscribe(response => {
        console.log(response);
      })
      location.reload();
  }
}

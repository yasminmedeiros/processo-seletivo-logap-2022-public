import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProductInterface } from 'src/app/interfaces/product';

@Component({
  selector: 'app-stock-lack',
  templateUrl: './stock-lack.component.html',
  styleUrls: ['./stock-lack.component.css']
})
export class StockLackComponent implements OnInit{
  
  public productList:ProductInterface[] = [];
  displayedColumns: string[] = ['name', 'value_send', 'value_buy', 'quantity','quantity_minimum'];
  dataSource:any;
  constructor(private product:ProductService,
    private _liveAnnouncer: LiveAnnouncer){ }
  ngOnInit(): void {
    this.product.get()
      .subscribe(res=>{
        this.productList = res.filter((value:ProductInterface)=>(value.quantity<=value.quantity_minimum)  
        );
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
  
}

import { Component, OnInit, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProviderInterface, ProviderLackStockInterface } from 'src/app/interfaces/provider';
import { ProviderService } from 'src/app/service/provider/provider.service';
import { ProductInterface } from 'src/app/interfaces/product';

@Component({
  selector: 'app-stock-lack-by-provider',
  templateUrl: './stock-lack-by-provider.component.html',
  styleUrls: ['./stock-lack-by-provider.component.css']
})
export class StockLackByProviderComponent  implements OnInit{
  
  public providerList:ProviderLackStockInterface[] = [];
  displayedColumns: string[] = ['name', 'cnpj', 'email', 'phone','productsLenght'];
  dataSource:any;
  constructor(private provider:ProviderService,
    private _liveAnnouncer: LiveAnnouncer){ }
  ngOnInit(): void {
    this.provider.get()
      .subscribe(res=>{
        const arrayProvider:ProviderLackStockInterface[] = [];
        res.map((value:ProviderInterface)=>{
          let sum = 0;
          value.products.map((value:ProductInterface)=>{
            if(value.quantity_minimum>=value.quantity){
              sum+=(value.quantity_minimum-value.quantity);
            }
          })
          if(sum>0){
            arrayProvider.push({
              name: value.name,
              cnpj: value.cnpj,
              email: value.email,
              phone: value.phone,
              productsLenght: sum
            })
          }
        })
        this.providerList = arrayProvider;

      })
    this.dataSource = new MatTableDataSource(this.providerList);

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
    this.provider.deleteData(`${id}`)
      .subscribe(response => {
        console.log(response);
      })
      location.reload();
  }
}

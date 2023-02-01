import { Component, OnInit, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProviderInterface } from 'src/app/interfaces/provider';
import { ProviderService } from 'src/app/service/provider/provider.service';

@Component({
  selector: 'app-table-all-provider',
  templateUrl: './table-all-provider.component.html',
  styleUrls: ['./table-all-provider.component.css']
})
export class TableAllProviderComponent  implements OnInit{
  
  public providerList:ProviderInterface[] = [];
  displayedColumns: string[] = ['name', 'cnpj', 'email', 'phone','buttons'];
  dataSource:any;
  constructor(private provider:ProviderService,
    private _liveAnnouncer: LiveAnnouncer){ }
  ngOnInit(): void {
    this.provider.get()
      .subscribe(res=>{
        this.providerList = res;
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
      .subscribe(() => {
        console.log("");
      })
  }
}

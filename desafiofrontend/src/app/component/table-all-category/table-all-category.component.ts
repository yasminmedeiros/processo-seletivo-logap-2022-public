import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table-all-category',
  templateUrl: './table-all-category.component.html',
  styleUrls: ['./table-all-category.component.css']
})
export class TableAllCategoryComponent {

}

import { NgModule } from '@angular/core'; 
import { BrowserModule } from'@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableAllProductsComponent } from './component/table-all-products/table-all-products.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TableAllCategoryComponent } from './component/table-all-category/table-all-category.component';
import { TableAllProviderComponent } from './component/table-all-provider/table-all-provider.component';
import { FormPostProviderComponent } from './component/form-post-provider/form-post-provider.component';
import { FormPostProductsComponent } from './component/form-post-products/form-post-products.component';
import { FormPostCategoryComponent } from './component/form-post-category/form-post-category.component';

@NgModule(
    { declarations: [AppComponent, TableAllProductsComponent, SidebarComponent, TableAllCategoryComponent, TableAllProviderComponent, FormPostProviderComponent, FormPostProductsComponent, FormPostCategoryComponent], 
      imports: [BrowserModule, MatButtonModule, MatPaginatorModule,AppRoutingModule, MatSortModule, MatTableModule, HttpClientModule, MatSidenavModule, MatListModule, BrowserAnimationsModule, MatExpansionModule], 
      providers: [], 
      bootstrap: [AppComponent]
    }
) 
export class AppModule {}

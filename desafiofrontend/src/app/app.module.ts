import { NgModule } from '@angular/core'; 
import { BrowserModule } from'@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TableAllProductsComponent } from './component/get/table-all-products/table-all-products.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';  
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastModule } from '@coreui/angular';
import { AlertModule } from '@coreui/angular';
import { ProgressModule } from '@coreui/angular';
import { TableAllCategoryComponent } from './component/get/table-all-category/table-all-category.component';
import { TableAllProviderComponent } from './component/get/table-all-provider/table-all-provider.component';
import { FormPostProviderComponent } from './component/post/form-post-provider/form-post-provider.component';
import { FormPostProductsComponent } from './component/post/form-post-products/form-post-products.component';
import { FormPostCategoryComponent } from './component/post/form-post-category/form-post-category.component';
import { StockCategoryComponent } from './component/report/stock-category/stock-category.component';
import { StockLackComponent } from './component/report/stock-lack/stock-lack.component';
import { StockLackByProviderComponent } from './component/report/stock-lack-by-provider/stock-lack-by-provider.component';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { FormPutCategoryComponent } from './component/put/form-put-category/form-put-category.component';
import { FormPutProviderComponent } from './component/put/form-put-provider/form-put-provider.component';
import { FormPutProductComponent } from './component/put/form-put-product/form-put-product.component';

@NgModule(
    { declarations: [AppComponent, TableAllProductsComponent, SidebarComponent, TableAllCategoryComponent, TableAllProviderComponent, FormPostProviderComponent, FormPostProductsComponent, FormPostCategoryComponent, StockCategoryComponent, StockLackComponent, StockLackByProviderComponent, FormPutCategoryComponent, FormPutProviderComponent, FormPutProductComponent], 
      imports: [BrowserModule, AlertModule, ProgressModule,MatButtonModule, ToastModule,MatSelectModule, MatNativeDateModule,MatListModule, ReactiveFormsModule,FormsModule, MatFormFieldModule, MatPaginatorModule,AppRoutingModule, MatSortModule, MatTableModule, HttpClientModule, MatSidenavModule, MatListModule, BrowserAnimationsModule, MatExpansionModule], 
      providers: [], 
      bootstrap: [AppComponent]
    }
) 
export class AppModule {}

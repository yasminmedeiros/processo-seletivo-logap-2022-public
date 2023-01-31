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
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule(
    { declarations: [AppComponent, TableAllProductsComponent, SidebarComponent], 
      imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatSidenavModule, MatListModule, BrowserAnimationsModule, MatExpansionModule], 
      providers: [], 
      bootstrap: [AppComponent]
    }
) 
export class AppModule {}

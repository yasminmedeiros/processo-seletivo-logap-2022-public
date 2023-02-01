import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { FormPostCategoryComponent } from './component/form-post-category/form-post-category.component';
import { FormPostProductsComponent } from './component/form-post-products/form-post-products.component';
import { FormPostProviderComponent } from './component/form-post-provider/form-post-provider.component';
import { StockCategoryComponent } from './component/stock-category/stock-category.component';
import { StockLackByProviderComponent } from './component/stock-lack-by-provider/stock-lack-by-provider.component';
import { StockLackComponent } from './component/stock-lack/stock-lack.component';
import { TableAllCategoryComponent } from './component/table-all-category/table-all-category.component';
import { TableAllProductsComponent } from './component/table-all-products/table-all-products.component';
import { TableAllProviderComponent } from './component/table-all-provider/table-all-provider.component';

const routes: Routes = [
    {path:'' ,redirectTo:'products', pathMatch:'full' },
    {path:'products', component: TableAllProductsComponent},
    {path:'categories', component: TableAllCategoryComponent},
    {path:'providers', component: TableAllProviderComponent},
    {path:'post-product', component: FormPostProductsComponent},
    {path:'post-category', component: FormPostCategoryComponent},
    {path:'post-provider', component: FormPostProviderComponent},
    {path:'stock-category', component: StockCategoryComponent},
    {path:'stock-lack', component: StockLackComponent},
    {path:'stock-lack-by-provider', component: StockLackByProviderComponent},
]; 

@NgModule(
    { imports:
        [RouterModule.forRoot(routes)], 
        exports: [RouterModule] 
    }
) 
export class AppRoutingModule {}

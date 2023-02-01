import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { FormPostCategoryComponent } from './component/post/form-post-category/form-post-category.component';
import { FormPostProductsComponent } from './component/post/form-post-products/form-post-products.component';
import { FormPostProviderComponent } from './component/post/form-post-provider/form-post-provider.component';
import { StockCategoryComponent } from './component/report/stock-category/stock-category.component';
import { StockLackByProviderComponent } from './component/report/stock-lack-by-provider/stock-lack-by-provider.component';
import { StockLackComponent } from './component/report/stock-lack/stock-lack.component';
import { TableAllCategoryComponent } from './component/get/table-all-category/table-all-category.component';
import { TableAllProductsComponent } from './component/get/table-all-products/table-all-products.component';
import { TableAllProviderComponent } from './component/get/table-all-provider/table-all-provider.component';
import { FormPutProductComponent } from './component/put/form-put-product/form-put-product.component';
import { FormPutCategoryComponent } from './component/put/form-put-category/form-put-category.component';
import { FormPutProviderComponent } from './component/put/form-put-provider/form-put-provider.component';

const routes: Routes = [
    {path:'' ,redirectTo:'products', pathMatch:'full' },
    {path:'products', component: TableAllProductsComponent},
    {path:'categories', component: TableAllCategoryComponent},
    {path:'providers', component: TableAllProviderComponent},
    {path:'post-product', component: FormPostProductsComponent},
    {path:'post-category', component: FormPostCategoryComponent},
    {path:'post-provider', component: FormPostProviderComponent},
    {path:'put-product/:id', component: FormPutProductComponent},
    {path:'put-category/:id', component: FormPutCategoryComponent},
    {path:'put-provider/:id', component: FormPutProviderComponent},
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

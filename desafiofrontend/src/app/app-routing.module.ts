import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { FormPostCategoryComponent } from './component/post/form-post-category/form-post-category.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './guard/auth.guard';
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
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component: LoginComponent},
    {path:'products', component: TableAllProductsComponent, canActivate: [AuthGuard]},
    {path:'categories', component: TableAllCategoryComponent, canActivate: [AuthGuard]},
    {path:'providers', component: TableAllProviderComponent, canActivate: [AuthGuard]},
    {path:'post-product', component: FormPostProductsComponent, canActivate: [AuthGuard]},
    {path:'post-category', component: FormPostCategoryComponent, canActivate: [AuthGuard]},
    {path:'post-provider', component: FormPostProviderComponent, canActivate: [AuthGuard]},
    {path:'put-product/:id', component: FormPutProductComponent, canActivate: [AuthGuard]},
    {path:'put-category/:id', component: FormPutCategoryComponent, canActivate: [AuthGuard]},
    {path:'put-provider/:id', component: FormPutProviderComponent, canActivate: [AuthGuard]},
    {path:'stock-category', component: StockCategoryComponent, canActivate: [AuthGuard]},
    {path:'stock-lack', component: StockLackComponent, canActivate: [AuthGuard]},
    {path:'stock-lack-by-provider', component: StockLackByProviderComponent, canActivate: [AuthGuard]},
]; 

@NgModule(
    { imports:
        [RouterModule.forRoot(routes)], 
        exports: [RouterModule] 
    }
) 
export class AppRoutingModule {}

import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router'; 
import { TableAllProductsComponent } from './component/table-all-products/table-all-products.component';

const routes: Routes = [
    {
        path:"products",component:TableAllProductsComponent
    }
]; 

@NgModule(
    { imports:
        [RouterModule.forRoot(routes)], 
        exports: [RouterModule] 
    }
) 
export class AppRoutingModule {}

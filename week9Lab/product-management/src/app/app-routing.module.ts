import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';


const routes: Routes = [

  { path: 'update/:id/:name/:description/:price/:units', component: UpdateProductComponent },
  { path: 'create', component: AddProductComponent },
  { path: 'read', component: ListProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SouscategoriesComponent } from './souscategories/souscategories.component';
import { CategorieComponent } from './categorie/categorie.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { SscategoriesComponent } from './sscategories/sscategories.component';
import { ProductComponent } from './product/product.component';
import { CaddyComponent } from './caddy/caddy.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {path:'categorie',component:CategorieComponent},
  {path:'',redirectTo:'categorie',pathMatch:'full'},
  {path:'souscatego/:p1/:p2', component:SouscategoriesComponent},
  {path:'Login', component:LoginComponent},
  {path:'payment', component:PaymentComponent},
  {path:'products/:p1/:p2',component:ProductsComponent},
  {path:'product/:id', component:ProductComponent},
  {path:'caddy', component:CaddyComponent},
  {path:'client', component:ClientComponent},
  {path:'sscatego/:p1/:p2', component:SscategoriesComponent},
  {path:'payment/:orderID/:p2', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { AutoGeneratedComponent } from '@src/app/auto-generated/auto-generated.component';
import { CategorieComponent } from '@src/app/categorie/categorie.component';
import { SouscategoriesComponent } from '@src/app/souscategories/souscategories.component';
import { LoginComponent } from '@src/app/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PaymentComponent } from '@src/app/payment/payment.component';
import { ProductComponent } from '@src/app/product/product.component';
import { ProductsComponent } from '@src/app/products/products.component';
import { SscategoriesComponent } from '@src/app/sscategories/sscategories.component';
import { ClientComponent } from '@src/app/client/client.component';
import { CaddyComponent } from '@src/app/caddy/caddy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from '@src/app/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoGeneratedComponent,
    CategorieComponent,
    SouscategoriesComponent,
    LoginComponent,
    PaymentComponent,
    ProductComponent,
    ProductsComponent,
    SscategoriesComponent,
    ClientComponent,
    CaddyComponent,
    DialogComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,FormsModule, BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

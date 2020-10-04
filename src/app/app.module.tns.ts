import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule, NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular';
import { AppRoutingModule } from '../app/app-routing.module.tns';
import { AppComponent } from '../app/app.component';
import { AutoGeneratedComponent } from '../app/auto-generated/auto-generated.component';
import { CaddyComponent } from '../app/caddy/caddy.component';
import { CategorieComponent } from '../app/categorie/categorie.component';
import { ClientComponent } from '../app/client/client.component';
import { DialogComponent } from '../app/dialog/dialog.component';
import { LoginComponent } from '../app/login/login.component';
import { PaymentComponent } from '../app/payment/payment.component';
import { ProductComponent } from '../app/product/product.component';
import { ProductsComponent } from '../app/products/products.component';
import { SouscategoriesComponent } from '../app/souscategories/souscategories.component';
import { SscategoriesComponent } from '../app/sscategories/sscategories.component';
import {UserService} from './services/UserService';




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
    DialogComponent,
  ],
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,

    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }

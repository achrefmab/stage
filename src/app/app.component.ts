import {Component, OnInit,} from '@angular/core';
import {CatalogueService} from './services/catalogue.service';
import {Router} from '@angular/router';
import {CaddyService} from './services/caddy.service';
import {AuthenticationService} from './services/authentication.service';
import { Config, Menu } from './types';

declare const openNav: any;
declare const closeNav: any;


@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  categories;
  currentCategorie;



 constructor(public catService:CatalogueService,
             private  router:Router,
             public caddyService:CaddyService,
             public authService:AuthenticationService){}

 ngOnInit(): void {
   this.getCategories();
   this.authService.loadUser();
   if(this.authService.isAuthenticated())
    this.caddyService.loadCaddyFromLocalStorage();

 }

 private getCategories() {
  this.catService.getResource(this.catService.host+"/categories")
    .subscribe(data=>{
      this.categories=data;
    },err=>{
      console.log(err);
    })
}




 getProductsByCat(c) {
   this.currentCategorie=c;
   this.router.navigateByUrl('/products/2/'+c.id);
 }

 onSelectedProducts() {
   this.currentCategorie=undefined;
   this.router.navigateByUrl("/products/1/0");
 }

 onProductsPromo() {
   this.currentCategorie=undefined;
   this.router.navigateByUrl("/products/3/0");
 }

 onProductsDispo() {
   this.currentCategorie=undefined;
   this.router.navigateByUrl("/products/4/0");
 }

 onLogin() {
   this.router.navigateByUrl('/Login');
 }

 Logout() {
   this.caddyService.emptyCaddy();
   this.authService.logout();
   this.router.navigateByUrl('/Login');
   location.reload();
 }
 onClick() {
  openNav();
}
onClick1() {
  closeNav();
}
}


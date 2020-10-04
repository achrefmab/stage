import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../services/catalogue.service';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
import { CaddyService } from '../services/caddy.service';
import { AuthenticationService } from '../services/authentication.service';
declare const openNav: any;
declare const closeNav: any;
@Component({
  selector: 'app-souscategories',
  templateUrl: './souscategories.component.html',
  styleUrls: ['./souscategories.component.css']
})
export class SouscategoriesComponent implements OnInit {

  sCategories;
   currentCategorie;
   products;
   editPhoto: boolean;
   currentProduct: any;
   selectedFiles;
   
   title:string;
   currentRequest:string;
   nameCat:string;
  private currentTime: number=0;

  constructor(public catService:CatalogueService,
              private  router:Router,
              public caddyService:CaddyService,
              public authService:AuthenticationService,
              private route:ActivatedRoute){}
              ngOnInit() {
                let idCat=this.route.snapshot.params.p1;
                let nameCat=this.route.snapshot.params.p2
                this.title=nameCat;
                this.currentRequest='/categories/'+idCat+'/scategories';
                this.getProducts(this.currentRequest);
                
              }
 
  private getProducts(url) {
    this.catService.getResource(this.catService.host+url)
      .subscribe(data=>{
        this.sCategories=data;
      },err=>{
        console.log(err);
      })
  }
  getTS() {
    return this.currentTime;
  }
  
  onClick() {
    openNav();
  }
  onClick1() {
    closeNav();
  }
  getProductsByCat(c) {
    this.currentCategorie=c;
    this.router.navigateByUrl('/products/2/'+c.id);
  }
  getScatByCat(c) {
    this.currentCategorie=c;
    this.router.navigateByUrl('/sscatego/'+c.id+'/'+c.name);
  }
  
}

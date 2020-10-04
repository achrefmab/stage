import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';
import { CaddyService } from '../services/caddy.service';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-sscategories',
  templateUrl: './sscategories.component.html',
  styleUrls: ['./sscategories.component.css']
})
export class SscategoriesComponent implements OnInit {

  sSCategories;
  currentCategorie;
  products;
  editPhoto: boolean;
  currentProduct: any;
  selectedFiles;

  title:string;
  currentRequest:string;
 private currentTime: number=0;

 constructor(public catService:CatalogueService,
             private  router:Router,
             public caddyService:CaddyService,
             public authService:AuthenticationService,
             private route:ActivatedRoute){}
             ngOnInit() {
               let idCat=this.route.snapshot.params.p1;
               let name=this.route.snapshot.params.p2;
               this.title=name;

                     this.currentRequest='/sCategories/'+idCat+'/sscategories';
                     this.getProducts(this.currentRequest);

             }

 private getProducts(url) {
   this.catService.getResource(this.catService.host+url)
     .subscribe(data=>{
       this.sSCategories=data;
     },err=>{
       console.log(err);
     })
 }
 getTS() {
   return this.currentTime;
 }

 getProductsByCat(c) {
   this.currentCategorie=c;
   this.router.navigateByUrl('/products/2/'+c.id);
 }
 getScatByCat(c) {
   this.currentCategorie=c;
   this.router.navigateByUrl('/sscatego/'+c.id);
 }
}

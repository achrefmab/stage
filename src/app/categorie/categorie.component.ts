import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CatalogueService } from '../services/catalogue.service';
import { CaddyService } from '../services/caddy.service';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css'],
  moduleId: module.id
})
export class CategorieComponent implements OnInit {
  categories;
  currentCategorie;
  private currentTime: number=0;


 constructor(public catService:CatalogueService,
               private router: Router,
             public caddyService:CaddyService,
             public authService:AuthenticationService){}
 ngOnInit(): void {
   this.getCategories();
  }
  goto() {

    this.router.navigateByUrl("/souscatego");
  }
  private getCategories() {
    this.catService.getResource(this.catService.host+"/categories")
      .subscribe(data=>{
        this.categories=data;
      },err=>{
        console.log(err);
      })
  }
  getTS() {
    return this.currentTime;
  }
  getScatByCat(c) {
    this.currentCategorie=c;
    this.router.navigateByUrl('/souscatego/'+c.id+'/'+c.name);
  }

}


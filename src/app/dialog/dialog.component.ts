import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from '../model/compte.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  compte=new Compte();
msg="";
  constructor(private authService:AuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
  }
register()
{
  this.authService.saveCompte(this.compte).subscribe(data=>{
    console.log("well");
  this.msg="Vous avez creé un compte"
  },err=>{
    console.log(err);
  });

}

}

import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {CaddyService} from '../services/caddy.service';
import { Config, Menu } from '../types';
import {Client} from '../model/client.model';
import {UserService} from '../services/UserService.service';
import { Page } from "tns-core-modules/ui/page";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { AuthenticationService } from '../services/authentication.service';
import { Compte } from '../model/compte.model';




@Component({
  selector: 'app-login',
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() options;
  @Input() menus: Menu[];
  config: Config;
  compte=new Compte();
  isLoggingIn = true;
  client : Client;
  @ViewChild("password") password: ElementRef;
  @ViewChild("confirmPassword") confirmPassword: ElementRef;

  constructor(
    private authService:AuthenticationService,
    private page: Page,
    private userService:UserService,
              private router:Router,
              private caddyService:CaddyService
  ) {
    this.client = new Client();

  }

  ngOnInit(): void {

  }

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
  }

  submit() {
    if (!this.client.email || !this.client.password) {
        this.alert("Please provide both an email address and password.");
        return;
    }

    if (this.isLoggingIn) {
        this.login("");
    } else {
        this.register();
    }
}



forgotPassword() {
  prompt({
    title: "Forgot Password",
    message: "Enter the email address you used to register for APP NAME to reset your password.",
    inputType: "email",
    defaultText: "",
    okButtonText: "Ok",
    cancelButtonText: "Cancel"
}).then((data) => {
        if (data.result) {
            this.userService.resetPassword(data.text.trim())
                .then(() => {
                    this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                }).catch(() => {
                    this.alert("Unfortunately, an error occurred resetting your password.");
                });
        }
    });
}

focusPassword() {
    this.password.nativeElement.focus();
}
focusConfirmPassword() {
    if (!this.isLoggingIn) {
        this.confirmPassword.nativeElement.focus();
    }
}

alert(message: string) {
    return alert({
        title: "APP NAME",
        okButtonText: "OK",
        message: message
    });
}
login(user){
  this.authService.login(user.username,user.password);
  if(this.authService.isAuthenticated()){
    this.caddyService.loadCaddyFromLocalStorage();
    this.router.navigateByUrl('');
  }

}


onLogin(user){
  this.authService.login(user.username,user.password);
  if(this.authService.isAuthenticated()){
    this.caddyService.loadCaddyFromLocalStorage();
    this.router.navigateByUrl('');
  }

}

register()
{
  this.authService.auth(this.compte).subscribe(data=>{
    localStorage.setItem("authenticatedUser",JSON.stringify(this.compte));
    this.authService.authenticated=true;
    //this.authService.compte=this.compte;
    this.authService.authenticatedUser=this.compte;

    this.caddyService.loadCaddyFromLocalStorage();
    if(this.compte.roles=="admin"){
    console.log("well");
  }
    this.router.navigateByUrl('/Login');

  },err=>{
    console.log(err);
    this.authService.authenticated=false;
  });

}

}

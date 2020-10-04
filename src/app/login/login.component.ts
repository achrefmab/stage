import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {CaddyService} from '../services/caddy.service';
import { Config, Menu } from '../types';
import {Client} from '../model/client.model';
import {UserService} from '../services/UserService';
import { Page } from "tns-core-modules/ui/page";



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
  isLoggingIn = true;
  client : Client;
  @ViewChild("password") password: ElementRef;
  @ViewChild("confirmPassword") confirmPassword: ElementRef;

  constructor(private page: Page,
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
        this.login();
    } else {
        this.register();
    }
}

login() {
    this.userService.login(this.client)
        .then(() => {
            this.router.navigate(["/home"]);
        })
        .catch(() => {
            this.alert("Unfortunately we could not find your account.");
        });
}

register() {
    if (this.client.password != this.client.confirmPassword) {
        this.alert("Your passwords do not match.");
        return;
    }
    this.userService.register(this.client)
        .then(() => {
            this.alert("Your account was successfully created.");
            this.isLoggingIn = true;
        })
        .catch(() => {
            this.alert("Unfortunately we were unable to create your account.");
        });
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






}

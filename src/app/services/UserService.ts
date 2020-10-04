import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";
import { Client } from "../model/client.model";

@Injectable({
  providedIn:'root'
})
export class UserService {
    register(client : Client) {
        return new Promise((resolve, reject) => {
            Kinvey.Client.logout()
                .then(() => {
                    Kinvey.Client.signup({ username: client.email, password: client.password })
                        .then(resolve)
                        .catch((error) => { this.handleErrors(error); reject(); })
                })
                .catch((error) => { this.handleErrors(error); reject(); })
        });
    }

    login(client : Client) {
        return new Promise((resolve, reject) => {
            Kinvey.Client.logout()
                .then(() => {
                    Kinvey.Client.login(client.email, client.password)
                        .then(resolve)
                        .catch((error) => { this.handleErrors(error); reject(); })
                })
                .catch((error) => { this.handleErrors(error); reject(); })
        });
    }

    resetPassword(email) {
        return Kinvey.Client.resetPassword(email)
            .catch(this.handleErrors);
    }

    handleErrors(error: Kinvey.BaseError) {
        console.error(error.message);
    }
}

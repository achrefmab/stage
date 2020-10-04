import { Injectable } from "@angular/core";
import { promises } from 'dns';
import { Client } from "../model/client.model";

@Injectable({
  providedIn:'root'
})
export class UserService {
    register(client : Client) {
        return new Promise((resolve, reject) => {
            resolve(true );
        });
    }

    login(client : Client) {
        return new Promise((resolve, reject) => {
           resolve (true);
        });
    }

    resetPassword(email) {
      return new Promise((resolve, reject) => {
        resolve (true);
     });
    }


}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CONFIG } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class PortrService {
    constructor(
        private httpClient: HttpClient,
        private route: Router
      ) {}


      getAllPort() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.httpClient.get(CONFIG.URL +  "port/afficherAll",{ headers: headers})}
        
        addport(nom) {
            const user = JSON.parse(localStorage.getItem('currentUser'));
            let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set("Authorization", 'Bearer ' + user.token);
          
            let contactf= JSON.stringify({name:nom});
              console.log(contactf)
             return  this.httpClient.post(CONFIG.URL +  "port/ajouterport",contactf,{ headers: headers, responseType: 'text' })
            }
  


    }
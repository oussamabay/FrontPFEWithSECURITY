import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CONFIG } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class VisiteurService {
    constructor(
        private httpClient: HttpClient,
        private route: Router
      ) {}
      getAllVisiteur() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.httpClient.get(CONFIG.URL +  "visiteur/affichelall",{ headers: headers})}
     
        activer(id) {
            const user = JSON.parse(localStorage.getItem('currentUser'));
          
              let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set("Authorization", 'Bearer ' + user.token);
          
           
             return  this.httpClient.post(CONFIG.URL +  "visiteur/activer?id="+id,{ headers: headers, responseType: 'text' })
            }
      

    }
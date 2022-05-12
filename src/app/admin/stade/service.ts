import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CONFIG } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class StadeService {
    constructor(
        private httpClient: HttpClient,
        private route: Router
      ) {}


      getAllStade() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.httpClient.get(CONFIG.URL +  "stade/afficherAll",{ headers: headers})}
      
        getStadebyid(id) {
          const user = JSON.parse(localStorage.getItem('currentUser'));
          let headers = new HttpHeaders();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set("Authorization", 'Bearer ' + user.token);
          return this.httpClient.get(CONFIG.URL +  "stade/afficherbyid?id="+id,{ headers: headers})}
        
        addstade(nomstade,ville,capacite) {
          const user = JSON.parse(localStorage.getItem('currentUser'));
        
            let headers = new HttpHeaders();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set("Authorization", 'Bearer ' + user.token);
        
          let contactf= JSON.stringify({nomstade:nomstade,ville:ville,capacite:capacite});
            console.log(contactf)
           return  this.httpClient.post(CONFIG.URL +  "stade/ajouterstade",contactf,{ headers: headers, responseType: 'text' })
          }
          update(id,nomstade,ville,capacite) {
            const user = JSON.parse(localStorage.getItem('currentUser'));
          
              let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set("Authorization", 'Bearer ' + user.token);
          
            let contactf= JSON.stringify({id:id,nomstade:nomstade,ville:ville,capacite:capacite});
              console.log(contactf)
             return  this.httpClient.post(CONFIG.URL +  "stade/update",contactf,{ headers: headers, responseType: 'text' })
            }
  
            archiver(id) {
              const user = JSON.parse(localStorage.getItem('currentUser'));
            
                let headers = new HttpHeaders();
              headers = headers.set('Content-Type', 'application/json; charset=utf-8');
              headers = headers.set("Authorization", 'Bearer ' + user.token);
            
              return  this.httpClient.post(CONFIG.URL +  "stade/archiver?id="+id,{ headers: headers, responseType: 'text' })
              }
    
}
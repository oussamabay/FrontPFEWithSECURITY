import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CONFIG } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class ArbiterService {
    constructor(
        private httpClient: HttpClient,
        private route: Router
      ) {}


      getAllArbiter() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.httpClient.get(CONFIG.URL +  "arbitre/afficherAll",{ headers: headers})}
     
        getArbiterbyid(id : any) {
          const user = JSON.parse(localStorage.getItem('currentUser'));
          let headers = new HttpHeaders();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set("Authorization", 'Bearer ' + user.token);
          return this.httpClient.get(CONFIG.URL +  "arbitre/afficherbyid?id="+id,{ headers: headers})}
          

          archiver(id) {
            const user = JSON.parse(localStorage.getItem('currentUser'));
            let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set("Authorization", 'Bearer ' + user.token);
          
             return  this.httpClient.post(CONFIG.URL +  "arbitre/archiver?id="+id,{ headers: headers, responseType: 'text' })
            }

        addarbitre(nomprenomar,adrar,agear) {
          const user = JSON.parse(localStorage.getItem('currentUser'));
          let headers = new HttpHeaders();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set("Authorization", 'Bearer ' + user.token);
        
          let contactf= JSON.stringify({nomprenomar:nomprenomar,adrar:adrar,agear:agear});
            console.log(contactf)
           return  this.httpClient.post(CONFIG.URL +  "arbitre/ajouter",contactf,{ headers: headers, responseType: 'text' })
          }

          updatearbitre(id,nomprenomar,adrar,agear) {
            const user = JSON.parse(localStorage.getItem('currentUser'));
            let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set("Authorization", 'Bearer ' + user.token);
          
            let contactf= JSON.stringify({id:id,nomprenomar:nomprenomar,adrar:adrar,agear:agear});
              console.log(contactf)
             return  this.httpClient.post(CONFIG.URL +  "arbitre/update",contactf,{ headers: headers, responseType: 'text' })
            }
          
}
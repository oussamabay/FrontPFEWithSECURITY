import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CONFIG } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class EquipeService {
    constructor(
        private httpClient: HttpClient,
        private route: Router
      ) {}


      getAllEquipe() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.httpClient.get(CONFIG.URL +  "equipe/afficherAll",{ headers: headers})}


        getequipebyid(id) {
          const user = JSON.parse(localStorage.getItem('currentUser'));
          let headers = new HttpHeaders();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set("Authorization", 'Bearer ' + user.token);
          return this.httpClient.get(CONFIG.URL +  "equipe/afficherbyid?id="+id,{ headers: headers})}
      
          edit(id,nom,entraineur,date) {
            const user = JSON.parse(localStorage.getItem('currentUser'));
          
              let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set("Authorization", 'Bearer ' + user.token);
          
            let contactf= JSON.stringify({id:id,date:date,entraineur:entraineur,nom:nom});
              console.log(contactf)
             return  this.httpClient.post(CONFIG.URL +  "equipe/update",contactf,{ headers: headers, responseType: 'text' })
            }
            archiver(id) {
              const user = JSON.parse(localStorage.getItem('currentUser'));
            
                let headers = new HttpHeaders();
              headers = headers.set('Content-Type', 'application/json; charset=utf-8');
              headers = headers.set("Authorization", 'Bearer ' + user.token);
            
               return  this.httpClient.post(CONFIG.URL +  "equipe/archiver?id="+id,{ headers: headers, responseType: 'text' })
              }
          
        addequipe(nom,entraineur,date,port) {
          const user = JSON.parse(localStorage.getItem('currentUser'));
        
            let headers = new HttpHeaders();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set("Authorization", 'Bearer ' + user.token);
        
          let contactf= JSON.stringify({date:date,entraineur:entraineur,nom:nom});
            console.log(contactf)
           return  this.httpClient.post(CONFIG.URL +  "equipe/ajouterequipe?port="+port,contactf,{ headers: headers, responseType: 'text' })
          }
      

}
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CONFIG } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class JoueurService {
    constructor(
        private httpClient: HttpClient,
        private route: Router
      ) {}


      getAllservice() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.httpClient.get(CONFIG.URL +  "joueur/afficherAll",{ headers: headers})}
      
        getbyid(id) {
          const user = JSON.parse(localStorage.getItem('currentUser'));
          let headers = new HttpHeaders();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set("Authorization", 'Bearer ' + user.token);
          return this.httpClient.get(CONFIG.URL +  "joueur/afficherbyid?id="+id,{ headers: headers})}
        
        addjoueur(age,nomprenom,poste,nomequipe) {
          const user = JSON.parse(localStorage.getItem('currentUser'));
        
            let headers = new HttpHeaders();
          headers = headers.set('Content-Type', 'application/json; charset=utf-8');
          headers = headers.set("Authorization", 'Bearer ' + user.token);
          let contactf= JSON.stringify({age:age,nomprenom:nomprenom,poste:poste});
          console.log(contactf)
           return  this.httpClient.post(CONFIG.URL +  "joueur/ajouterjoueur?nomequipe="+nomequipe,contactf,{ headers: headers, responseType: 'text' })
          }
          archiver(id) {
            const user = JSON.parse(localStorage.getItem('currentUser'));
          
              let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set("Authorization", 'Bearer ' + user.token);
         
             return  this.httpClient.post(CONFIG.URL +  "joueur/archiver?id="+id,{ headers: headers, responseType: 'text' })
            }
        
          editjoueur(id,age,nomprenom,poste,nomequipe) {
            const user = JSON.parse(localStorage.getItem('currentUser'));
          
              let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set("Authorization", 'Bearer ' + user.token);
            let contactf= JSON.stringify({id:id,age:age,nomprenom:nomprenom,poste:poste});
            console.log(contactf,nomequipe)
             return  this.httpClient.post(CONFIG.URL +  "joueur/update?nomequipe="+nomequipe,contactf,{ headers: headers, responseType: 'text' })
            }
       
}
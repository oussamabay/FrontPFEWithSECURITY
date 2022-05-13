import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { CONFIG } from "src/environments/environment";
import { Partie } from "./partie";

@Injectable({ providedIn: "root" })
export class PartieService {
    constructor(
        private httpClient: HttpClient,
        private route: Router
      ) {}


      getjoueurbyequipe(nom:any): Observable <any>{
        const user = JSON.parse(localStorage.getItem('currentUser'));
      
          let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
      
         return  this.httpClient.get<any>(CONFIG.URL +  "joueur/afficherbyequipe?nomequipe="+nom,{ headers: headers })
        }
      




      getpartiebyid(id:any): Observable <Partie>{
        const user = JSON.parse(localStorage.getItem('currentUser'));
      
          let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
      
         return  this.httpClient.get<any>(CONFIG.URL +  "partie/afficherbyid?id="+id,{ headers: headers })
        }
      
      getAllPartie() {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        headers = headers.set("Authorization", 'Bearer ' + user.token);
        return this.httpClient.get(CONFIG.URL +  "partie/afficherAll",{ headers: headers})}
      
        addpartie(nomarbitre,nomequipeA,nomequipeB,nomstade,date,heure,nompartie) {
            const user = JSON.parse(localStorage.getItem('currentUser'));
          
              let headers = new HttpHeaders();
            headers = headers.set('Content-Type', 'application/json; charset=utf-8');
            headers = headers.set("Authorization", 'Bearer ' + user.token);
          
            let contactf= JSON.stringify({date:date,heure:heure,nompartie:nompartie});
              console.log(contactf)
             return  this.httpClient.post(CONFIG.URL +  "partie/ajout?nomarbitre="+nomarbitre+"&nomequipeA="+nomequipeA+"&nomequipeB="+nomequipeB+"&nomstade="+nomstade,contactf,{ headers: headers, responseType: 'text' })
            }
            archiver(id) {
              const user = JSON.parse(localStorage.getItem('currentUser'));
            
                let headers = new HttpHeaders();
              headers = headers.set('Content-Type', 'application/json; charset=utf-8');
              headers = headers.set("Authorization", 'Bearer ' + user.token);
            
              
               return  this.httpClient.post(CONFIG.URL +  "partie/archiver?id="+id,{ headers: headers, responseType: 'text' })
              }
        
            addscore(butA,butB,id,json) {
              const user = JSON.parse(localStorage.getItem('currentUser'));
            
                let headers = new HttpHeaders();
              headers = headers.set('Content-Type', 'application/json; charset=utf-8');
              headers = headers.set("Authorization", 'Bearer ' + user.token);
            
               return  this.httpClient.post(CONFIG.URL +  "partie/scorepartie?butA="+butA+"&butB="+butB+"&id="+id,json,{ headers: headers, responseType: 'text' })
              }
          
  
}
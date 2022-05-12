import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DashbordService {
  constructor(private http: HttpClient, private httpClient: HttpClient) {}

  classementbuteur(){
    const user = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.httpClient.get(CONFIG.URL +  "partie/classementbuteur",{ headers: headers})}



classement(){
    const user = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.httpClient.get(CONFIG.URL +  "partie/classement",{ headers: headers})}
  

  NBmatierepremiére = () => {
    return this.http.get(
      `${CONFIG.URL}api/PrimaryMatrial/nbrPrimaryMatrial`
    );
  };

  NBProduit = () => {
    return this.http.get(
      `${CONFIG.URL}api/ProductAll/nbrProduct`
    );
  };

  PrRejeter = () => {
    return this.http.get(
      `${CONFIG.URL}api/rejection/compteurlistePRrejection`
    );
  };


}

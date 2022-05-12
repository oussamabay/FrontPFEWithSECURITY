import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "src/environments/environment";

@Injectable({ providedIn: "root" })

export class bondecommandeservice {
  constructor(private http: HttpClient) {}

  getBondecommandebyclient = (email) => {
    return this.http.get(`${CONFIG.URL}api/bcclient/getbyemail?email=${email}`);
  };
  AddBCC(libelle,prixunitaire,qte,emailfou) {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    let contactf= JSON.stringify({libelle:libelle,prixunitaire:prixunitaire,qte:qte});
     return  this.http.post(CONFIG.URL +  "api/bcclient/addbcclientconnecte?emailclient="+emailfou,contactf,{ headers: headers, responseType: 'text' })
    }
  }

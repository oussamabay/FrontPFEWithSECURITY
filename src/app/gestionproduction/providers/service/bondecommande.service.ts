import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class BonDeCommandeService {
  constructor(private http: HttpClient) {}




  getAllBondecommande = () => {
    return this.http.get(`${CONFIG.URL}api/bcfournisseur/getall`);
  };

  getAllFournisseur = () => {
    return this.http.get(`${CONFIG.URL}api/Provider/afficherall`);
  };

  getAllBLF = () => {
    return this.http.get(`${CONFIG.URL}api/blfournisseur/getall`);
  };

  AddBCF(libelle,prixunitaire,qte,emailfou,emailrh) {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    let contactf= JSON.stringify({libelle:libelle,prixunitaire:prixunitaire,qte:qte});
     return  this.http.post(CONFIG.URL +  "api/bcfournisseur/addbcfournisseur?emailfournisseur="+emailfou+"&emailrh="+emailrh,contactf,{ headers: headers, responseType: 'text' })
    }
    AddBlF(id) {
      const user = JSON.parse(localStorage.getItem('currentUser'));

      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
       return  this.http.post(CONFIG.URL +  "api/blfournisseur/addblfournisseur?email="+user.email+"&id="+id,{ headers: headers, responseType: 'text' })
      }

}

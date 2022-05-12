import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CONFIG } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class clients {
  constructor(private http: HttpClient,  private router: Router) {}

  getAllClients = () => {
    return this.http.get(`${CONFIG.URL}api/Customer/getAllCustomer`);
  };
  getAllBondecommande = () => {

    return this.http.get(`${CONFIG.URL}api/bcclient/getall`);
  };

  getAllBondelivraison = () => {
    return this.http.get(`${CONFIG.URL}api/blclient/getall`);
  };



  deleteClient = (clientId) => {
    return this.http.post(
      `${CONFIG.URL}api/Customer/archiver?id=${clientId}`,
      clientId
    );
  };

  restoreClient = (clientId) => {
    return this.http.post(
      `${CONFIG.URL}api/Customer/desarchiver?id=${clientId}`,
      clientId
    );
  };

  getClientToEdit = (clientId) => {
    return this.http.get(
      `${CONFIG.URL}api/Customer/getCustomerbyid?id=${clientId}`
    );
  };


  addClient = (provider) => {
    return this.http.post(`${CONFIG.URL}api/Customer/add`, provider);
  };

  editClient = (editedClient) => {
    return this.http.put(`${CONFIG.URL}api/Customer/updateCustomer`, editedClient);
  };
  AddBCC(libelle,prixunitaire,qte,emailfou,emailrh) {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    let contactf= JSON.stringify({libelle:libelle,prixunitaire:prixunitaire,qte:qte});
     return  this.http.post(CONFIG.URL +  "api/bcclient/addbcclient?emailclient="+emailfou+"&emailrh="+emailrh,contactf,{ headers: headers, responseType: 'text' })
    }
    AddBlC(id) {
      const user = JSON.parse(localStorage.getItem('currentUser'));

      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set("Authorization", 'Bearer ' + user.token);
       return  this.http.post(CONFIG.URL +  "api/blclient/addblfournisseur?email="+user.email+"&id="+id,{ headers: headers, responseType: 'text' })
      }
}

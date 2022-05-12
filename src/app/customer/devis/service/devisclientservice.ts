import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CONFIG } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class DevisClientService{

  constructor(private http: HttpClient,  private router: Router) {}

  getAllProduct = () => {
    return this.http.get(`${CONFIG.URL}api/ProductAll/getAllProduct`);
  };
  getAllcurrency=()=>{
    return this.http.get(`${CONFIG.URL}api/currency/getAllCurrency`);

  }

  ADDCotationClient(email,desc,listfinal) {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    // console.log(contactf)
    // console.log(contactList)
     return  this.http.post(CONFIG.URL +  "api/cotation/adddevis?desc="+desc+"&email="+email,listfinal,{ headers: headers, responseType: 'text' })
    }
}

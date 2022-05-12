import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CONFIG } from "src/environments/environment";
@Injectable({ providedIn: "root" })

export class bondelivraiosnclientservice{
constructor(private http : HttpClient){}
getBonDelivraiosnbyClient=(email)=>{
  return this.http.get(`${CONFIG.URL}api/blclient/allbyemail?email=${email}`);

}


}

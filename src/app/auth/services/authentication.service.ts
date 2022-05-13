import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

//model
import { User } from "src/app/models/user";
import { CONFIG } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );

    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getbyemail(email) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
    return this.http.get(CONFIG.URL +  "visiteur/affichagebyemail?email="+email,{ headers: headers})}
  

  login(credentials) {
    return this.http.post<any>(`${CONFIG.URL}auth/login`, credentials).pipe(
      map((user) => {
        if (user && user.token) {
          //if user is found and token exists store it
          localStorage.setItem("currentUser", JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }
      })
    );
  }
addvisiteur(contact){
  let headers = new HttpHeaders();

  headers = headers.set('Content-Type', 'application/json; charset=utf-8');

 /* const user = JSON.parse(localStorage.getItem('currentUser'));
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set("Authorization", 'Bearer ' + user.token);
   */
   return this.http.post(CONFIG.URL +  "visiteur/ajouter",contact,{ headers:headers ,responseType: 'text' })}
  

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }

  resetpassword(email) {
    return this.http.get(`${CONFIG.URL}contact/réinitialisationPassword?email=${email}`)
  }
}

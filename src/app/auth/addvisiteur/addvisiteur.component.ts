import { Component, OnInit } from '@angular/core';
import { Toast } from "./../../shared/services/toast.service";
import { AuthenticationService } from "./../services/authentication.service";
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-addvisiteur',
  templateUrl: './addvisiteur.component.html',
  styleUrls: ['./addvisiteur.component.css']
})
export class AddvisiteurComponent implements OnInit {
  loginform: FormGroup;
  loading = false;
  showPassword = true;
  visiteur : any ;
utilisateur :any ;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private ToastService: Toast
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["admin"]);
    }
  }

  ngOnInit(): void {
    this.loginform = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
      datenaissance: new FormControl("", [Validators.required]),
      login: new FormControl("", [Validators.required]),



    });
  }

  onShowPassword() {
    this.showPassword = !this.showPassword;
  }
   add(){
     let utilisateur ={
       email : this.loginform.value['email'],
       password : this.loginform.value['password'],
       nom : this.loginform.value['nom'],
       prenom : this.loginform.value['prenom'],
       datenaissance : this.loginform.value['datenaissance']

     }
    let contactf= JSON.stringify({utilisateur});
    console.log(contactf)
    this.authenticationService.addvisiteur(contactf).subscribe((res)=>{
      if(res=="true"){
        this.ToastService.success("ajouté avec succès et En attendant la validation de l'administarteur");
        setTimeout(() => {
          this.router.navigate(["/authentication/login"]);
        }, 5000);
      }else{
        this.ToastService.warning("email estr existe");
        setTimeout(() => {
          this.router.navigate(["/authentication/login"]);
        }, 5000);
      }
    
    
    })
  }

}

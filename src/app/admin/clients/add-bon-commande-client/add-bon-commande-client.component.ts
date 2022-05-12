import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { clients } from '../service/clients.service';

@Component({
  selector: 'app-add-bon-commande-client',
  templateUrl: './add-bon-commande-client.component.html',
  styleUrls: ['./add-bon-commande-client.component.css']
})
export class AddBonCommandeClientComponent implements OnInit {
  addbondecommande: FormGroup;
  getAllpro:any ;
  profil : any ;
  route : any ;
  loading: boolean = false;
  constructor(private formBuilder: FormBuilder,    private ToastService:Toast,    private router: Router,
    private boncommandeservice : clients) { }

  ngOnInit(): void {
    if(this.profil=="Customer"){
      this.loading=true ;
      this.route = this.router.navigate(["/customer"]);
      this.loading=false ;
      }
      if(this.profil=="Gestionnaire_Production"){
        this.loading=true ;
        this.route = this.router.navigate(["/Gestionnaire_Production"]);
        this.loading=false ;
        }

    this.GetAllCustomer();
    this.addbondecommande = this.formBuilder.group({
      'libelle': ['', Validators.required],
      'prixunitaire':['',Validators.required],
      'qte':['',Validators.required],
      'email':['',Validators.required]
})
  }
  GetAllCustomer(){
    this.boncommandeservice.getAllClients().subscribe((res)=>{
      this.getAllpro=res;
      console.log(this.getAllpro)
    })
  }

  addBCF(libelle,prixunitaire,qte,email){
    const user = JSON.parse(localStorage.getItem('currentUser'));
this.boncommandeservice.AddBCC(libelle,prixunitaire,qte,email,user.email).subscribe((res)=>{
  if(res=="true"){

      this.ToastService.success("ajouté analyse avec succès");

        this.router.navigate(["/admin/bon-de-commande-client"]);




  }
})
  }



}

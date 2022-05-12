import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { bondecommandeservice } from '../service/bon-de-commande.service';

@Component({
  selector: 'app-add-bon-de-commande',
  templateUrl: './add-bon-de-commande.component.html',
  styleUrls: ['./add-bon-de-commande.component.css']
})
export class AddBonDeCommandeComponent implements OnInit {
  addbondecommande: FormGroup;

  constructor(private formBuilder: FormBuilder, private bondecommandeservice : bondecommandeservice,  private router: Router,  private ToastService:Toast) { }

  ngOnInit(): void {
    this.addbondecommande = this.formBuilder.group({
      'libelle': ['', Validators.required],
      'prixunitaire':['',Validators.required],
      'qte':['',Validators.required],
      'email':['',Validators.required]
})
  }

  addBCF(libelle,prixunitaire,qte){
    const user = JSON.parse(localStorage.getItem('currentUser'));
this.bondecommandeservice.AddBCC(libelle,prixunitaire,qte,user.email).subscribe((res)=>{
  if(res=="true"){

      this.ToastService.success("ajouté analyse avec succès");

        this.router.navigate(["/customer/bon-de-commande"]);




  }
})
  }


}

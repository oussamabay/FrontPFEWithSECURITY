import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { BonDeCommandeService } from '../service/bondecommande.service';

@Component({
  selector: 'app-add-bon-de-commande',
  templateUrl: './add-bon-de-commande.component.html',
  styleUrls: ['./add-bon-de-commande.component.css']
})
export class AddBonDeCommandeComponent implements OnInit {
  addbondecommande: FormGroup;
  getAllpro:any ;
  constructor(private formBuilder: FormBuilder,    private ToastService:Toast,    private router: Router,
    private boncommandeservice : BonDeCommandeService) { }

  ngOnInit(): void {
this.GetAllPRovider();
    this.addbondecommande = this.formBuilder.group({
      'libelle': ['', Validators.required],
      'prixunitaire':['',Validators.required],
      'qte':['',Validators.required],
      'email':['',Validators.required]



    })

  }
  GetAllPRovider(){
    this.boncommandeservice.getAllFournisseur().subscribe((res)=>{
      this.getAllpro=res;
    })
  }

  addBCF(libelle,prixunitaire,qte,email){
    const user = JSON.parse(localStorage.getItem('currentUser'));
this.boncommandeservice.AddBCF(libelle,prixunitaire,qte,email,user.email).subscribe((res)=>{
  if(res=="true"){

      this.ToastService.success("ajouté analyse avec succès");

        this.router.navigate(["/admin/providers/bon-de-commande"]);




  }
})
  }

}

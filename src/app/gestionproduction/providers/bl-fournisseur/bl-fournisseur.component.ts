import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { BonDeCommandeService } from '../service/bondecommande.service';

@Component({
  selector: 'app-bl-fournisseur',
  templateUrl: './bl-fournisseur.component.html',
  styleUrls: ['./bl-fournisseur.component.css']
})
export class BlFournisseurComponent implements OnInit {


  position: string;
  displayPosition: boolean;
  getallbl:any ;
  loading: boolean = false;
  contact : any ;
  searchTerm: string;
profil:any ;
route : any ;
  displayBasic: boolean;
  id:any ;
  constructor(private Bondecommandeservice : BonDeCommandeService,private ToastService:Toast,    private router: Router) {}
  myDate = new Date();

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.profil=user.profil ;
    if(this.profil=="Customer"){
      this.loading=true ;
      this.route = this.router.navigate(["/customer"]);
      this.loading=false ;
      }
      if(this.profil=="admin"){
        this.loading=true ;
        this.route = this.router.navigate(["/admin"]);
        this.loading=false ;
        }
    this.GetAllBL();
  }

  showBasicDialog(id)
  {
    this.id=id ;
    this.displayBasic = true;
  }
GetAllBL(){
  this.loading=true ;

this.Bondecommandeservice.getAllBLF().subscribe((res)=>{
  this.getallbl=res ;
  this.loading=false ;

  console.log(this.getallbl);
})
}




}

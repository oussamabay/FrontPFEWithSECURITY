import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { clients } from '../service/clients.service';

@Component({
  selector: 'app-blclient',
  templateUrl: './blclient.component.html',
  styleUrls: ['./blclient.component.css']
})
export class BlclientComponent implements OnInit {

  position: string;
  displayPosition: boolean;
  getallbl:any ;
  loading: boolean = false;
  contact : any ;
  searchTerm: string;

  displayBasic: boolean;
  id:any ;
  profil : any ;
  route  : any ;
  constructor(private Bondelivraisonservice : clients,private ToastService:Toast,    private router: Router) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.profil=user.profil ;
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
    this.GetAllBL();
  }
  showBasicDialog(id)
  {
    this.id=id ;
    this.displayBasic = true;
  }
  GetAllBL(){
    this.loading=true ;

    this.Bondelivraisonservice.getAllBondelivraison().subscribe((res)=>{
      this.getallbl=res ;
      this.loading=false ;

      console.log(this.getallbl);
    })
    }
}

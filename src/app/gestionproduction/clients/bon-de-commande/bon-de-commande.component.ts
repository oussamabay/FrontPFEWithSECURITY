import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { clients } from '../service/clients.service';

@Component({
  selector: 'app-bon-de-commande',
  templateUrl: './bon-de-commande.component.html',
  styleUrls: ['./bon-de-commande.component.css']
})
export class BonDeCommandeComponentClinet implements OnInit {
  getallbc :any ;
  loading: boolean = false;
  displayBasic: boolean;
profil : any ;
route : any ;

id :any ;
  constructor(private BonDeClientService :clients,private ToastService:Toast,    private router: Router) { }

  ngOnInit(): void {
    this.GetAllBC();
  }
  GetAllBC(){
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
    this.loading=true ;

    this.BonDeClientService.getAllBondecommande().subscribe((res)=>{

      this.getallbc=res ;

      this.loading=false ;

      console.log(this.getallbc)
    })
    }
    showBasicDialog(id){
      this.id =id ;
      this.displayBasic = true;
      this.addBlC(id);
    }
    addBlC(id){
      console.log(id);

    this.BonDeClientService.AddBlC(id).subscribe((res)=>{
    console.log(res)
      if(res="true"){

        this.ToastService.success("Bonde de livraison recu avec succès");

          this.router.navigate(["/admin/bl-client"]);




    }
    })
    }
}

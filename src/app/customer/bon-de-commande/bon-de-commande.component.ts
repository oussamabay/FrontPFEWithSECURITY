import { Component, OnInit } from '@angular/core';
import { Toast } from 'src/app/shared/services/toast.service';
import { bondecommandeservice } from './service/bon-de-commande.service';

@Component({
  selector: 'app-bon-de-commande',
  templateUrl: './bon-de-commande.component.html',
  styleUrls: ['./bon-de-commande.component.css']
})
export class BonDeCommandeComponent implements OnInit {
  getbc: any ;
  loading: boolean = false;

  constructor(private ToastService:Toast
    ,private bondeservi:bondecommandeservice) { }

  ngOnInit(): void {
    this.GetBCClientByemail();
  }
GetBCClientByemail(){
  const user = JSON.parse(localStorage.getItem('currentUser'));
this.bondeservi.getBondecommandebyclient(user.email).subscribe((res)=>{
  this.getbc =res ;
  console.log(this.getbc);

})
}
}

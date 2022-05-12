import { Component, OnInit } from '@angular/core';
import { Toast } from 'src/app/shared/services/toast.service';
import { bondelivraiosnclientservice } from './service/bondelivraison.service';

@Component({
  selector: 'app-bon-de-livraison',
  templateUrl: './bon-de-livraison.component.html',
  styleUrls: ['./bon-de-livraison.component.css']
})
export class BonDeLivraisonComponent implements OnInit {
bl : any ;
loading: boolean = false;

  constructor(private ToastService:Toast
    ,private bonliv :bondelivraiosnclientservice) { }

  ngOnInit(): void {
    this.GetBLClientByeail();
  }
GetBLClientByeail(){
  const user = JSON.parse(localStorage.getItem('currentUser'));
this.bonliv.getBonDelivraiosnbyClient(user.email).subscribe((res)=>{
  this.bl =res ;
  console.log(this.bl)
})
}
}

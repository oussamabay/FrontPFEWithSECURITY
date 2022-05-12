import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord-gestion-prod',
  templateUrl: './dashbord-gestion-prod.component.html',
  styleUrls: ['./dashbord-gestion-prod.component.css']
})
export class DashbordGestionProdComponent implements OnInit {
  profil : any ;
  loading: boolean = false;
  route:any ;

  constructor(private router: Router) { }


  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.profil=user.profil ;
    if(this.profil=="customer"){
    this.loading=true ;
    this.route = this.router.navigate(["/customer"]);
    this.loading=false ;
    }
    if(this.profil=="admin"){
      this.loading=true ;
      this.route = this.router.navigate(["/admin"]);
      this.loading=false ;
      }
  }

}

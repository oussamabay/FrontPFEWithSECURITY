import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  profil : any ;
  loading: boolean = false;
  route:any ;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.profil=user.profil ;
    if(this.profil=="admin"){
    this.loading=true ;
    this.route = this.router.navigate(["/admin"]);
    this.loading=false ;
    }
    if(this.profil=="Gestionnaire_Production"){
      this.loading=true ;
      this.route = this.router.navigate(["/Gestionnaire_Production"]);
      this.loading=false ;
      }
  }

}

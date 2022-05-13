import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import Chart from "chart.js/auto";
import { DashbordService } from "./service.ts/dashbord.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  //select canva element
  @ViewChild("trafficChart") trafficChart;

  active: boolean = true;
    loading: boolean = false;
allclassement : any ;
allclassementbuteur : any ;

route:any ;
  prrejeter:any ;
  dashobardLoaded: boolean  = false;
  profil : any ;
  constructor(private dashbordservice : DashbordService,private router: Router) {}

 
  ngOnInit(): void {
    this.getclassement();
  this.getclassementbuteur();
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
  }
  getclassementbuteur(){
    this.dashbordservice.classementbuteur().subscribe((res)=>{
     this.allclassementbuteur=res;
      console.log(res);
    })
  }

  getclassement(){
    this.dashbordservice.classement().subscribe((res)=>{
     this.allclassement=res;
    })
  }
 


}

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

  clientsListOpened: boolean = true;
  active: boolean = true;
  canvas: any;
  ctx: any;
  nbMP:any ;
  nbP:any ;
  loading: boolean = false;
allclassement : any ;
allclassementbuteur : any ;

route:any ;
  prrejeter:any ;
  dashobardLoaded: boolean  = false;
  profil : any ;
  constructor(private dashbordservice : DashbordService,private router: Router) {}

  ngAfterViewInit() {
    this.canvas = this.trafficChart.nativeElement;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.canvas.width = 320;
    this.ctx.canvas.height = 320;
    this.ctx.le;

  this.dashbordservice.NBmatierepremiére().subscribe((res)=>{
    this.nbMP=res;
    this.dashbordservice.NBProduit().subscribe((res)=>{
      this.nbP=res ;
      this.dashbordservice.PrRejeter().subscribe((res)=>{
        this.prrejeter = res
      })
    })

    new Chart(this.ctx, {
      type: "doughnut",
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              afterLabel: function () {
                return "%";
              },
            },
          },
          legend: {
            display: false,
          },
        },
        cutout: 120,
        responsive: false,
      },
      data: {
        labels: ["MATIÈRES PREMIÈRES", "PRODUITS FINIS", "PRODUITS REJETÉS"],
        datasets: [
          {

            data: [ this.nbMP, this.nbP,  this.prrejeter],
            backgroundColor: ["#2C7BE5", "#A6C5F7", "#D2DDEC"],
          },
        ],
      },
    });


  })

  }

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
    this.Nbmatiérepremiére();
    this.NbProduit();
    this.PRrejeter();

    this.dashobardLoaded = !this.dashobardLoaded;

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
  PRrejeter(){
    this.dashbordservice.PrRejeter().subscribe((res)=>{
      this.prrejeter = res
    })
  }
  NbProduit(){
    this.dashbordservice.NBProduit().subscribe((res)=>{
      this.nbP=res ;
    })
  }
  Nbmatiérepremiére(){
this.dashbordservice.NBmatierepremiére().subscribe((res)=>{
  this.nbMP=res
})
  }
  switchMenus = ($event) => {
    const providerNavLink = $event.target.classList.contains("provider");

    if (providerNavLink) {
      this.clientsListOpened = !this.clientsListOpened;
      this.active = !this.active;
    } else {
      this.clientsListOpened = true;
      this.active = true;
    }
  };




}

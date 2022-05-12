import { Component, OnInit } from "@angular/core";

//model
import { Hr } from "./model/hr";

//services
import { hr } from "./services/hr.service";

import { ConfirmationService, PrimeNGConfig } from "primeng/api";
import { Toast } from "src/app/shared/services/toast.service";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "../../vfs_fonts";
import { DatePipe } from "@angular/common";
import { pdfservice } from "src/app/shared/services/pdfservice";
import { Router } from "@angular/router";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-humain-ressources",
  templateUrl: "./humain-ressources.component.html",
  styleUrls: ["./humain-ressources.component.css"],
  providers: [ConfirmationService, DatePipe, pdfservice],
})
export class HumainRessourcesComponent implements OnInit {
  //modal related position config
  position: string;
  displayPosition: boolean;

  hrs: Hr[];

  loading: boolean = false;
  contact: any;
  //search

  searchTerm: string;
profil :any ;
  // provider to be restored or deleted  Provider id , and archived status
route:any;
  hr: { id: string; archived: boolean };

  adressHome;
  adressWork;
  constructor(
    private pdfservi: pdfservice,
    private datePipe: DatePipe,
    private primengConfig: PrimeNGConfig,
    private hrService: hr,private router: Router,
    private ConfirmationService: ConfirmationService,
    private Toast: Toast
  ) {}
  myDate = new Date();

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
    this.primengConfig.ripple = true;
    this.onGetAllHr();
  }

  //get all hr
  onGetAllHr = () => {
    this.loading = true;
    this.hrService.getAllHrs().subscribe(
      (data: Hr[]) => {
        this.hrs = data;

        this.loading = false;
      },
      (error) => console.log(error)
    );
  };

  //delete hr
  onDeleteHr = () => {
    this.loading = true;
    this.hrService.deleteHr(this.hr.id).subscribe((response) => {
      this.Toast.success("ressource humaine supprimé avec succès");
      this.loading = false;
      this.onGetAllHr();
      this.ConfirmationService.close();
    });
  };

  // restore hr
  onRestoreHr = () => {
    this.loading = true;
    this.hrService.restoreHr(this.hr.id).subscribe((response) => {
      this.Toast.success("ressource humaine restaurer avec succès");
      this.loading = false;
      this.onGetAllHr();
      this.ConfirmationService.close();
    });
  };

  //open DELETE Modal
  DeletehrModal = ({ id, archived }) => {
    this.ConfirmationService.confirm({
      message: "Voulez-vous supprimer ce ressource humaine ?",
      header: "Confirmation",
      icon: "pi pi-info-circle",
    });
    console.log(id);
    // hr to be archived
    this.hr = { id, archived };
  };

  generatePdf(u, format) {
    this.hrService.getAllHrs().subscribe(
      (data: Hr[]) => {
        this.hrs = data;
        this.loading = false;
        let titre = "La liste des ressources humaines";
        this.pdfservi.exportFile(u, format, titre);
      },
      (error) => console.log(error)
    );
  }

  //open RESTORE Modal
  RestorehrModal = ({ id, archived }) => {
    this.ConfirmationService.confirm({
      message: "Voulez-vous restaurer ce ressource humaine ?",
      header: "Confirmation",
      icon: "pi pi-info-circle",
    });
    // hr to be deleted
    this.hr = { id, archived };
  };

  //MODAL details position
  showPositionDialog(position: string, idhr) {
    this.position = position;
    this.displayPosition = true;

    let hrsAdress;
    hrsAdress = this.hrs.filter((hr) => (hr.id === idhr ? hr : null));

    let [hr] = hrsAdress;

    let { adresspresonnel, adressetravaille } = hr;

    this.adressHome = adresspresonnel;
    this.adressWork = adressetravaille;
  }

  //CANCEL close modal
  cancel = () => {
    this.ConfirmationService.close();
  };
}

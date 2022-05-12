import { Component, OnInit } from "@angular/core";
//model
import { Client } from "./model/client";

//services

import { ConfirmationService, PrimeNGConfig } from "primeng/api";
import { Toast } from "src/app/shared/services/toast.service";
import { clients } from "./service/clients.service";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "../../vfs_fonts";
import { DatePipe } from "@angular/common";
import { pdfservice } from "src/app/shared/services/pdfservice";
import { Router } from "@angular/router";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"],
  providers: [ConfirmationService, DatePipe, pdfservice],
})
export class ClientsComponent implements OnInit {
  //modal related position config
  position: string;
  displayPosition: boolean;
  clients: Client[];
  loading: boolean = false;
  //search
  searchTerm: string;
  // client to be restored or deleted  client id , and archived status
  client: { id: string; archived: boolean };

  adressHome;
  adressWork;
  myDate = new Date();
profil : any ;
route : any ;
  constructor(
    private router:Router,
    private datePipe: DatePipe,
    private pdfservi: pdfservice,
    private clientService: clients,
    private primengConfig: PrimeNGConfig,
    private ConfirmationService: ConfirmationService,
    private Toast: Toast
  ) {}

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
    this.primengConfig.ripple = true;
    this.onGetAllClients();
  }

  //get all clients
  onGetAllClients = () => {
    this.loading = true;
    this.clientService.getAllClients().subscribe(
      (data: Client[]) => {
        this.clients = data;
        this.loading = false;
      },
      (error) => console.log(error)
    );
  };

  generatePdf(u, format) {
    this.clientService.getAllClients().subscribe(
      (data: Client[]) => {
        this.clients = data;
        let titre = "La liste des clients";
        this.pdfservi.exportFile(u, format, titre);

        this.loading = false;
      },
      (error) => console.log(error)
    );
  }

  //delete client
  onDeleteClient = () => {
    this.loading = true;
    this.clientService.deleteClient(this.client.id).subscribe((response) => {
      this.loading = false;
      this.Toast.success("client est supprimé avec succès");
      this.onGetAllClients();
      this.ConfirmationService.close();
    });
  };

  // restore client
  onRestoreClient = () => {
    this.loading = true;
    this.clientService.restoreClient(this.client.id).subscribe((response) => {
      this.Toast.success("client restaurer avec succès");
      this.loading = false;
      this.onGetAllClients();
      this.ConfirmationService.close();
    });
  };

  //open DELETE Modal
  DeleteClientModal = ({ id, archived }) => {
    this.ConfirmationService.confirm({
      message: "Voulez-vous supprimer ce client?",
      header: "Confirmation",
      icon: "pi pi-info-circle",
    });
    // client to be archived
    this.client = { id, archived };
  };

  //open RESTORE Modal
  RestoreClientModal = ({ id, archived }) => {
    this.ConfirmationService.confirm({
      message: "Voulez-vous restaurer ce client?",
      header: "Confirmation",
      icon: "pi pi-info-circle",
    });
    // client to be deleted
    this.client = { id, archived };
  };

  //MODAL details position
  showPositionDialog(position: string, idClient) {
    this.position = position;
    this.displayPosition = true;

    let clientsAdress;
    clientsAdress = this.clients.filter((client) =>
      client.id === idClient ? client : null
    );

    let [client] = clientsAdress;

    let { adresspresonnel, adressetravaille } = client;

    this.adressHome = adresspresonnel;
    this.adressWork = adressetravaille;
  }

  //CANCEL close modal
  cancel = () => {
    this.ConfirmationService.close();
  };
}

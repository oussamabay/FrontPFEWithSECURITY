import { Component, OnInit } from "@angular/core";

//model
import { Provider } from "./model/provider";

//services
import { providers } from "./service/providers.service";
import { ConfirmationService, PrimeNGConfig } from "primeng/api";
import { Toast } from "src/app/shared/services/toast.service";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "../../vfs_fonts";
import { DatePipe } from "@angular/common";
import { pdfservice } from "src/app/shared/services/pdfservice";
import { Router } from "@angular/router";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-providers",
  templateUrl: "./providers.component.html",
  styleUrls: ["./providers.component.css"],
  providers: [ConfirmationService,DatePipe,pdfservice],
})
export class ProvidersComponent implements OnInit {
  //modal related position config
  position: string;
  displayPosition: boolean;

  providers: Provider[];

  loading: boolean = false;

  //search

  searchTerm: string;
  myDate = new Date();
profil : any ;
route : any ;
  // provider to be restored or deleted  Provider id , and archived status

  provider: { id: string; archived: boolean };


  adressHome;
  adressWork;

  constructor(
    private datePipe :DatePipe,
    private pdfservi :pdfservice,
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private providerService: providers,
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
    this.onGetAllProviders();
  }

  //CRUD

  //get all providers
  onGetAllProviders = () => {
    this.loading = true;
    this.providerService.getAllProviders().subscribe(
      (data: Provider[]) => {
        this.providers = data;

        this.loading = false;
      },
      (error) => console.log(error)
    );
  };

  //delete provider
  onDeleteProvider = () => {
    this.loading = true;
    this.providerService
      .deleteProvider(this.provider.id)
      .subscribe((response) => {
        this.Toast.success("fournisseur supprimé avec succès");
        this.loading = false;
        this.onGetAllProviders();
        this.ConfirmationService.close();
      });
  };







  generatePdf(u, format) {
    this.providerService.getAllProviders().subscribe(
      (data: Provider[]) => {
        this.providers = data;
        let titre ="La liste des fournisseurs"
        this.pdfservi.exportFile(u, format,titre);
        this.loading = false;
      },
      (error) => console.log(error)
    );

 }


  // restore provider
  onRestoreProvider = () => {
    this.loading = true;
    this.providerService
      .restoreProvider(this.provider.id)
      .subscribe((response) => {
        this.Toast.success("fournisseur restaurer avec succès");
        this.loading = false;
        this.onGetAllProviders();
        this.ConfirmationService.close();
      });
  };

  //open DELETE Modal
  DeleteProviderModal = ({ id, archived }) => {
    this.ConfirmationService.confirm({
      message: "Voulez-vous supprimer ce fournisseur ?",
      header: "Confirmation",
      icon: "pi pi-info-circle",
    });
    // provider to be archived
    this.provider = { id, archived };
  };

  //open RESTORE Modal
  RestoreProviderModal = ({ id, archived }) => {
    this.ConfirmationService.confirm({
      message: "Voulez-vous restaurer ce fournisseur ?",
      header: "Confirmation",
      icon: "pi pi-info-circle",
    });
    // provider to be deleted
    this.provider = { id, archived };
  };

  //MODAL details position
  showPositionDialog(position: string,idprovider) {
    this.position = position;
    this.displayPosition = true;


    let providersAdress;
    providersAdress = this.providers.filter((provider) =>
      provider.id === idprovider ? provider : null
    );

    let [provider] = providersAdress;

    let { adresspresonnel, adressetravaille } = provider;

    this.adressHome = adresspresonnel;
    this.adressWork = adressetravaille;
  }

  //CANCEL close modal
  cancel = () => {
    this.ConfirmationService.close();
  };
}

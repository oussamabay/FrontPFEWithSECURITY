import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { CalendarModule } from "primeng/calendar";
import { GestionProductionRoutingModule } from "./gestionproduction-routing.module";
import { DialogModule } from "primeng/dialog";
import { TooltipModule } from "primeng/tooltip";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { DashbordGestionProdComponent } from "../dashbord-gestion-prod/dashbord-gestion-prod.component";
import { ClientsComponent } from "../clients/clients.component";
import { ProvidersComponent } from "../providers/providers.component";
import { BonDeCommandeComponentClinet } from "../clients/bon-de-commande/bon-de-commande.component";
import { BlclientComponent } from "../clients/blclient/blclient.component";
import { BonDeCommandeComponent } from "../providers/bon-de-commande/bon-de-commande.component";
import { BlFournisseurComponent } from "../providers/bl-fournisseur/bl-fournisseur.component";

@NgModule({
  declarations: [
    DashbordGestionProdComponent,
    ClientsComponent,
    BonDeCommandeComponentClinet,
    BlclientComponent,
    ProvidersComponent,
    BonDeCommandeComponent,
    BlFournisseurComponent
  ],
  imports: [
    CommonModule,
    GestionProductionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    ButtonModule,
    DialogModule,
    TooltipModule,
    ConfirmDialogModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
})

export class GestionProductionModule {}

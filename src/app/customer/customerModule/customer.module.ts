import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BonDeCommandeComponent } from "../bon-de-commande/bon-de-commande.component";
import { CustomerRoutingModule } from "./costumer-routing.module";
import { CalendarModule } from "primeng/calendar";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { TooltipModule } from "primeng/tooltip";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { DashbordComponent } from "../dashbord/dashbord.component";
import { AddBonDeCommandeComponent } from "../bon-de-commande/add-bon-de-commande/add-bon-de-commande.component";
import { BonDeLivraisonComponent } from "../bon-de-livraison/bon-de-livraison.component";
import { AdddevisComponent } from "../devis/adddevis/adddevis.component";

@NgModule({
  declarations: [
    BonDeCommandeComponent,
    AddBonDeCommandeComponent,
    DashbordComponent,
    BonDeLivraisonComponent,
    AdddevisComponent
  ],
  imports:[
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    ButtonModule,
    DialogModule,
    TooltipModule,
    ConfirmDialogModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ]
})
export class CustomerModuler{}

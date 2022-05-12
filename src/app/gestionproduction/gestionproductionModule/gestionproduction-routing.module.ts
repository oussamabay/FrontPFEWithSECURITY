import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlclientComponent } from "../clients/blclient/blclient.component";
import { BonDeCommandeComponentClinet } from "../clients/bon-de-commande/bon-de-commande.component";
import { ClientsComponent } from "../clients/clients.component";
import { DashbordGestionProdComponent } from "../dashbord-gestion-prod/dashbord-gestion-prod.component";
import { BlFournisseurComponent } from "../providers/bl-fournisseur/bl-fournisseur.component";
import { BonDeCommandeComponent } from "../providers/bon-de-commande/bon-de-commande.component";
import { ProvidersComponent } from "../providers/providers.component";

const routes: Routes = [

  { path: "", component: DashbordGestionProdComponent }, // default route of the module
  { path: "clients", component: ClientsComponent },
  { path : "bon-de-commande-client",component :BonDeCommandeComponentClinet},
  {path: "bl-client",component: BlclientComponent},
  { path: "providers", component: ProvidersComponent },
  { path: "providers/bon-de-commande", component: BonDeCommandeComponent },
  { path: "providers/bl-fournisseur", component: BlFournisseurComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionProductionRoutingModule {}

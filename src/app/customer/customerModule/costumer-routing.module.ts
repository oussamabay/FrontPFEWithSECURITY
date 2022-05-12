import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddBonDeCommandeComponent } from "../bon-de-commande/add-bon-de-commande/add-bon-de-commande.component";
import { BonDeCommandeComponent } from "../bon-de-commande/bon-de-commande.component";
import { BonDeLivraisonComponent } from "../bon-de-livraison/bon-de-livraison.component";
import { DashbordComponent } from "../dashbord/dashbord.component";
import { AdddevisComponent } from "../devis/adddevis/adddevis.component";

const routes: Routes = [
  { path: "", component: DashbordComponent },
  { path: "bon-de-commande", component: BonDeCommandeComponent },
  {path : "bondecommandeclient" , component: AddBonDeCommandeComponent},
  {path: "bondelivraisonclient",component:BonDeLivraisonComponent},
  {path: "add-devis",component:AdddevisComponent}
  // default route of the module

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule{}

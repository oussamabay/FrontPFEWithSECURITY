
import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { AddClientsComponent } from "../clients/add-clients/add-clients.component";
import { ClientsComponent } from "../clients/clients.component";
import { EditClientComponent } from '../clients/edit-client/edit-client.component';
import { DashboardComponent } from "../dashboard/dashboard.component";

import { HumainRessourcesComponent } from "../humain-ressources/humain-ressources.component";
import { AddRessourcesComponent } from "../humain-ressources/add-ressources/add-ressources.component";

import { EditRessourcesComponent } from '../humain-ressources/edit-ressources/edit-ressources.component';
import { BonDeCommandeComponentClinet } from "../clients/bon-de-commande/bon-de-commande.component";
import { AddBonCommandeClientComponent } from "../clients/add-bon-commande-client/add-bon-commande-client.component";
import { BlclientComponent } from "../clients/blclient/blclient.component";
import { FactureComponent } from "../clients/facture/facture.component";
import { ArbitreComponent } from "../arbitre/arbitre.component";
import { StadeComponent } from "../stade/stade.component";
import { EquipeComponent } from "../equipe/equipe.component";
import { JoueurComponent } from "../joueur/joueur.component";
import { AddarbiterComponent } from "../arbitre/addarbiter/addarbiter.component";
import { AddstadeComponent } from "../stade/addstade/addstade.component";
import { PartieComponent } from "../partie/partie.component";
import { AddpartieComponent } from "../partie/addpartie/addpartie.component";
import { ScoreComponent } from "../partie/score/score.component";
import { AddequipeComponent } from "../equipe/addequipe/addequipe.component";
import { AddjoueurComponent } from "../joueur/addjoueur/addjoueur.component";
import { EditarbitreComponent } from "../arbitre/editarbitre/editarbitre.component";
import { EdistadeComponent } from "../stade/edistade/edistade.component";
import { EditequipeComponent } from "../equipe/editequipe/editequipe.component";
import { EditjoueurComponent } from "../joueur/editjoueur/editjoueur.component";


const routes: Routes = [

  { path: "", component: DashboardComponent }, // default route of the module
  { path: "arbitre",component:ArbitreComponent},
  {path :"arbitre/add",component:AddarbiterComponent},
  {path :"arbitre/edit",component:EditarbitreComponent},

  { path: "stade" ,component:StadeComponent},
  {path :"stade/add",component:AddstadeComponent},
  {path:"stade/edit",component:EdistadeComponent},
  {path:"partie",component:PartieComponent},
  {path:"partie/add",component:AddpartieComponent},
  {path:"partie/score",component:ScoreComponent},
  {path : "equipe",component:EquipeComponent},
  {path:"equipe/add",component:AddequipeComponent},
  {path:"equipe/edit",component:EditequipeComponent},
  {path:"joueur",component:JoueurComponent},
  {path:"joueur/add",component:AddjoueurComponent},
  {path:"joueur/edit",component:EditjoueurComponent},
  { path: "humainRessources", component: HumainRessourcesComponent },
  { path: "humainRessources/add", component: AddRessourcesComponent },
  { path: "humainRessources/edit/:id", component: EditRessourcesComponent},

  { path: "clients", component: ClientsComponent },
  { path: "clients/add", component: AddClientsComponent },
  { path: "clients/edit/:id", component: EditClientComponent },
  {path:"facture",component:FactureComponent},
  { path: "bon-de-commande-client", component : BonDeCommandeComponentClinet},
  {path:  "add-bon-de-commande", component :AddBonCommandeClientComponent},
  {path: "bl-client",component: BlclientComponent},

  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

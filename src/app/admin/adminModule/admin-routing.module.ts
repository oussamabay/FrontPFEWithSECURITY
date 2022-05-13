
import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Components
import { DashboardComponent } from "../dashboard/dashboard.component";

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
import { AddvisiteurComponent } from "src/app/auth/addvisiteur/addvisiteur.component";
import { VisiteurComponent } from "../visiteur/visiteur.component";


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
  {path:"visiteur",component:VisiteurComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

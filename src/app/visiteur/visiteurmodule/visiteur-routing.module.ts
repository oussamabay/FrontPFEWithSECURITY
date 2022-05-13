import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArbitreComponent } from "../arbitre/arbitre.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { EquipeComponent } from "../equipe/equipe.component";
import { JoueurComponent } from "../joueur/joueur.component";
import { PartieComponent } from "../partie/partie.component";
import { StadeComponent } from "../stade/stade.component";
const routes: Routes = [

    { path: "", component: DashboardComponent }, // default route of the module
    {path:"partie",component:PartieComponent},
    {path:"arbitre",component:ArbitreComponent},
    {path:"joueur",component:JoueurComponent},
  {path:"equipe",component:EquipeComponent},
  {path:"stade",component:StadeComponent}
  ];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class VisiteurRoutingModule {}
import { VisiteurRoutingModule } from "./visiteur-routing.module";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";

//NG PRIME
import { CalendarModule } from "primeng/calendar";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { TooltipModule } from "primeng/tooltip";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ArbitreComponent } from "../arbitre/arbitre.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { PartieComponent } from "../partie/partie.component";
import { JoueurComponent } from "../joueur/joueur.component";
import { EquipeComponent } from "../equipe/equipe.component";
import { StadeComponent } from "../stade/stade.component";

@NgModule({
    declarations: [
      ArbitreComponent,
      PartieComponent,
      JoueurComponent,
      EquipeComponent,
      StadeComponent,
      DashboardComponent
    ],
    imports: [
      CommonModule,
      VisiteurRoutingModule,
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
  
export class VisiteurModule {}

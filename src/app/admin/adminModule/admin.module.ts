
import { NgModule } from "@angular/core";
import { AdminRoutingModule } from "./admin-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// components
import { DashboardComponent } from "../dashboard/dashboard.component";


//search pipe
import { Ng2SearchPipeModule } from "ng2-search-filter";

//NG PRIME
import { CalendarModule } from "primeng/calendar";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { TooltipModule } from "primeng/tooltip";
import { ConfirmDialogModule } from "primeng/confirmdialog";

import { ArbitreComponent } from '../arbitre/arbitre.component';
import { StadeComponent } from '../stade/stade.component';
import { EquipeComponent } from '../equipe/equipe.component';
import { JoueurComponent } from '../joueur/joueur.component';
import { AddarbiterComponent } from '../arbitre/addarbiter/addarbiter.component';
import { AddstadeComponent } from '../stade/addstade/addstade.component';
import { PartieComponent } from '../partie/partie.component';
import { AddpartieComponent } from '../partie/addpartie/addpartie.component';
import { ScoreComponent } from '../partie/score/score.component';
import { AddequipeComponent } from '../equipe/addequipe/addequipe.component';
import { AddjoueurComponent } from '../joueur/addjoueur/addjoueur.component';
import { EditarbitreComponent } from '../arbitre/editarbitre/editarbitre.component';
import { EdistadeComponent } from '../stade/edistade/edistade.component';
import { EditequipeComponent } from '../equipe/editequipe/editequipe.component';
import { EditjoueurComponent } from '../joueur/editjoueur/editjoueur.component';
import { AddvisiteurComponent } from 'src/app/auth/addvisiteur/addvisiteur.component';
import { VisiteurComponent } from '../visiteur/visiteur.component';

@NgModule({
  declarations: [
    AddvisiteurComponent,
    EquipeComponent,
    AddequipeComponent,
    EditequipeComponent,
    StadeComponent,
    AddstadeComponent,
    EdistadeComponent,
    ArbitreComponent,
    AddarbiterComponent,
    EditarbitreComponent,
    JoueurComponent,
    AddjoueurComponent,
    EditjoueurComponent,
    PartieComponent,
    AddpartieComponent,
    ScoreComponent,
    DashboardComponent,
    VisiteurComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
export class AdminModule {}

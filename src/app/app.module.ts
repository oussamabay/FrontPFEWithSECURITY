import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpModule } from "@angular/http";

//routing
import { AppRoutingModule } from "./app-routing.module";

//components
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ToastComponent } from "./components/toast/toast.component";
import { AppComponent } from "./app.component";


//interceptors
import { JwtInterceptor } from "./shared/helpers/jwt.interceptor";
import { AddequipeComponent } from './admin/equipe/addequipe/addequipe.component';
import { AddjoueurComponent } from './admin/joueur/addjoueur/addjoueur.component';
import { EditarbitreComponent } from './admin/arbitre/editarbitre/editarbitre.component';
import { EdistadeComponent } from './admin/stade/edistade/edistade.component';
import { EditequipeComponent } from './admin/equipe/editequipe/editequipe.component';
import { EditjoueurComponent } from './admin/joueur/editjoueur/editjoueur.component';
import { AddvisiteurComponent } from './auth/addvisiteur/addvisiteur.component';
import { VisiteurComponent } from './admin/visiteur/visiteur.component';
@NgModule({
  declarations: [AppComponent, SidenavComponent, ToastComponent,],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

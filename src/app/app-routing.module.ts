import { AuthGuard } from "./auth/guard/auth.guard";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddvisiteurComponent } from "./auth/addvisiteur/addvisiteur.component";

const routes: Routes = [
  {
    path: "authentication",
    loadChildren: () =>
      import("src/app/auth/authenticationModule/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("src/app/admin/adminModule/admin.module").then(
        (m) => m.AdminModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "visiteur",
    loadChildren: () =>
      import("src/app/visiteur/visiteurModule/visiteur.module").then(
        (m) => m.VisiteurModule
      ),
    canActivate: [AuthGuard],
  },








  {path:"addvisiteur",component:AddvisiteurComponent},





  
  { path: "", redirectTo: "authentication/login", pathMatch: "full" },
  { path: "**", redirectTo: "authentication" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

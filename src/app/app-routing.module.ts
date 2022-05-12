import { AuthGuard } from "./auth/guard/auth.guard";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

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
    path: "customer",
    loadChildren: () =>
      import("src/app/customer/customerModule/customer.module").then(
        (m) => m.CustomerModuler
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "Gestionnaire_Production",
    loadChildren: () =>
      import("src/app/gestionproduction/gestionproductionModule/gestionproduction.module").then(
        (m) => m.GestionProductionModule
      ),
    canActivate: [AuthGuard],
  },
  { path: "", redirectTo: "authentication/login", pathMatch: "full" },
  { path: "**", redirectTo: "authentication" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

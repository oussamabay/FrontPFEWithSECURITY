import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { hr } from "./../services/hr.service";
import { Hr } from "./../model/hr";

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Toast } from "src/app/shared/services/toast.service";
import { ValidationForm } from "./../../../shared/helpers/validationsForm";

@Component({
  selector: "app-add-ressources",
  templateUrl: "./add-ressources.component.html",
  styleUrls: ["./add-ressources.component.css"],
})
export class AddRessourcesComponent implements OnInit {
  //add form
  prrejeter:any ;
  dashobardLoaded: boolean  = false;
  profil : any
  hrForm: FormGroup;
  hrId: string;

  //loading ui
  loading: boolean = false;
  // forms steps
  steps = {
    step1: false,
    step2: false,
    step3: false,
  };

  // number of forms
  forms = [1, 2, 3];
  //get current form
  currentForm = this.forms[0];

  formTitle: string = "Contact";
routes : any ;
  constructor(
    private hrService: hr,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private toast: Toast,
    private ValidationFormService: ValidationForm
  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.profil=user.profil ;
    if(this.profil=="Customer"){
    this.loading=true ;
    this.routes = this.router.navigate(["/customer"]);
    this.loading=false ;
    }
    if(this.profil=="Gestionnaire_Production"){
      this.loading=true ;
      this.routes = this.router.navigate(["/Gestionnaire_Production"]);
      this.loading=false ;
      }
    this.hrId = this.route.snapshot.paramMap.get("id");

    let contact = this.fb.group({
      lastname: new FormControl("", [Validators.required]),
      firstname: new FormControl("", [Validators.required]),
      nationalno: new FormControl("", [Validators.required]),
      titleid: new FormControl("", [Validators.required]),
      telephone: new FormControl("", [
        Validators.required,
        this.ValidationFormService.validateNumber,
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        ),
      ]),
      raisonsocial: new FormControl("", [Validators.required]),
      remarque: new FormControl(""),
    });

    let adresspresonnel = this.fb.group({
      cityname: new FormControl("", [Validators.required]),
      regionname: new FormControl("", [Validators.required]),
      zip: new FormControl("", [Validators.required]),
      streetname: new FormControl("", [Validators.required]),
      streetno: new FormControl("", [Validators.required]),
      adressdes: new FormControl("", [Validators.required]),
    });

    let adressetravaille = this.fb.group({
      cityname: new FormControl("", [Validators.required]),
      regionname: new FormControl("", [Validators.required]),
      zip: new FormControl("", [Validators.required]),
      streetname: new FormControl("", [Validators.required]),
      streetno: new FormControl("", [Validators.required]),
      adressdes: new FormControl("", [Validators.required]),
    });

    this.hrForm = this.fb.group({
      contact,
      adressetravaille,
      adresspresonnel,
    });

    this.hrForm.valueChanges.subscribe((value: Hr) => {
      if (
        this.hrForm.get("contact").valid &&
        !this.hrForm.get("contact").pristine
      ) {
        this.steps.step1 = true;
      } else {
        this.steps.step1 = false;
      }

      if (
        this.hrForm.get("adresspresonnel").valid &&
        !this.hrForm.get("adresspresonnel").pristine
      ) {
        this.steps.step2 = true;
      } else {
        this.steps.step2 = false;
      }
      if (
        this.hrForm.get("adressetravaille").valid &&
        !this.hrForm.get("adressetravaille").pristine
      ) {
        this.steps.step3 = true;
      } else {
        this.steps.step3 = false;
      }
    });
  }

  // move to next step
  next = () => {
    this.currentForm++;
    if (this.currentForm > this.forms.length) {
      this.currentForm = 3;
    }
    this.setFormTitle();
  };

  // go back to previous step
  previous = () => {
    this.currentForm--;
    if (this.currentForm < 1) {
      this.router.navigate(["admin/humainRessources"]);
    }
    this.setFormTitle();
  };

  onAddhr = () => {
    this.loading = true;

    this.hrService.addHr(this.hrForm.value).subscribe(
      (response) => {
        if (response) {
          this.loading = false;
          this.toast.success("Ressource Humaine ajoutée avec succès .");
          this.router.navigate(["admin/humainRessources"]);
        }
      },
      (error) => {
        this.loading = false;
        this.toast.error("Une erreur s'est produite. Veuillez réessayer");
      }
    );
  };

  // set form title dynamically depends on step number
  setFormTitle = () => {
    switch (this.currentForm) {
      case 1:
        this.formTitle = "Contact";
        break;
      case 2:
        this.formTitle = "Adresse Personnelle";
        break;
      case 3:
        this.formTitle = "Adresse Travail";
        break;
    }
  };
}

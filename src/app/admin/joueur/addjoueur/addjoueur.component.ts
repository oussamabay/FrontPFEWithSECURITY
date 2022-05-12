import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { EquipeService } from '../../equipe/service';
import { JoueurService } from '../service';

@Component({
  selector: 'app-addjoueur',
  templateUrl: './addjoueur.component.html',
  styleUrls: ['./addjoueur.component.css']
})
export class AddjoueurComponent implements OnInit {
  FormGroup: FormGroup;
allequipe : any ;
  constructor(private _formBuilder: FormBuilder,private service : JoueurService,
    private ToastService: Toast,private router: Router,private equipeservice : EquipeService) { }

  ngOnInit(): void {
    this.getAllequipe();
    this.FormGroup = this._formBuilder.group({
      nomequipe: new FormControl("", [Validators.required]),
      nomprenom: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      poste : new FormControl("", [Validators.required]),

        });
    
  
  }
  getAllequipe(){
    this.equipeservice.getAllEquipe().subscribe
    ((res)=>{
this.allequipe=res ; 
    })
  }
addjoueur(){
  this.service.addjoueur(this.FormGroup.value['age'],this.FormGroup.value['nomprenom'],this.FormGroup.value['poste'],this.FormGroup.value['nomequipe']) .subscribe((res)=>{
    if(res=="true"){
      this.ToastService.success("ajouté avec succès");
      setTimeout(() => {
        this.router.navigate(["/admin/joueur"]);
      }, 4000);
    }
  

  })
}
}

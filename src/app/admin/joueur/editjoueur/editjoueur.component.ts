import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { EquipeService } from '../../equipe/service';
import { JoueurService } from '../service';

@Component({
  selector: 'app-editjoueur',
  templateUrl: './editjoueur.component.html',
  styleUrls: ['./editjoueur.component.css']
})
export class EditjoueurComponent implements OnInit {
id : any ;
joueur : any ;
FormGroup: FormGroup;
allequipe : any ;
  constructor(private _formBuilder: FormBuilder,private service : JoueurService,
    private equipeservice : EquipeService,
    private ToastService: Toast,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllequipe();
    this.FormGroup = this._formBuilder.group({
      nomequipe: new FormControl("", [Validators.required]),
      nomprenom: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      poste : new FormControl("", [Validators.required]),

        });
    this.id = this.route.snapshot.paramMap.get("id");
this.service.getbyid(this.id).subscribe((res)=>{
this.joueur =res ; 
console.log(this.joueur)
})
  }

  getAllequipe(){
    this.equipeservice.getAllEquipe().subscribe
    ((res)=>{
this.allequipe=res ; 
console.log(this.allequipe)
    })
  }

  editjouer(){
    if(this.FormGroup.value['nomequipe']==''){
      this.service.editjoueur(this.id,this.FormGroup.value['age'],this.FormGroup.value['nomprenom'],this.FormGroup.value['poste'],this.joueur.equipe.nom) .subscribe((res)=>{
        if(res=="true"){
          this.ToastService.success("ajouté avec succès");
          setTimeout(() => {
            this.router.navigate(["/admin/joueur"]);
          }, 4000);
        }
      
    
      })    }
      else{
        this.service.editjoueur(this.id,this.FormGroup.value['age'],this.FormGroup.value['nomprenom'],this.FormGroup.value['poste'],this.FormGroup.value['nomequipe']) .subscribe((res)=>{
          if(res=="true"){
            this.ToastService.success("ajouté avec succès");
            setTimeout(() => {
              this.router.navigate(["/admin/joueur"]);
            }, 4000);
          }
        
      
        })  
      }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { ArbiterService } from '../../arbitre/service';
import { EquipeService } from '../../equipe/service';
import { StadeService } from '../../stade/service';
import { PartieService } from '../service';

@Component({
  selector: 'app-addpartie',
  templateUrl: './addpartie.component.html',
  styleUrls: ['./addpartie.component.css']
})
export class AddpartieComponent implements OnInit {
allarbitre : any ;
allstade : any ;
FormGroup: FormGroup;
allequipe : any ;
  constructor(private arbitreservice :ArbiterService,private stadeservice : StadeService,
    private equipeservice:EquipeService, private _formBuilder: FormBuilder,private router: Router,
    private ToastService: Toast,private partieservice :PartieService) { }

  ngOnInit(): void {
    this.getAllarbitre();
    this.getAllstade();
    this.getAllequipe();
    this.FormGroup = this._formBuilder.group({
      equipea: new FormControl("", [Validators.required]),
      equipeb: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      heure: new FormControl("", [Validators.required]),
      journe:new FormControl("", [Validators.required]),
      stade:new FormControl("", [Validators.required]),
      arbitre:new FormControl("", [Validators.required])


        });
  }



  addpartie(){
    // nomarbitre,nomequipeA,nomequipeB,nomstade,date,heure,nompartie
     console.log(this.FormGroup.value)
   this.partieservice.addpartie(this.FormGroup.value['arbitre'],this.FormGroup.value['equipea'],
   this.FormGroup.value['equipeb'],this.FormGroup.value['stade'],
   this.FormGroup.value['date'],this.FormGroup.value['heure'],this.FormGroup.value['journe']).subscribe((res)=>{
    if(res=="true"){
      this.ToastService.success("ajouté avec succès");
      setTimeout(() => {
        this.router.navigate(["/admin/partie"]);
      }, 4000);
    }
  
   })
   }
 







  getAllequipe(){
  this.equipeservice.getAllEquipe().subscribe((res)=>{
    this.allequipe=res ; 
  })
}
  getAllarbitre(){
    this.arbitreservice.getAllArbiter().subscribe((res)=>{
    this.allarbitre =res ; 
  })
  }
  getAllstade(){
    this.stadeservice.getAllStade().subscribe((res)=>{
      this.allstade=res ; 
    })
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { Partie } from '../partie';
import { PartieService } from '../service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
id : any ;
partie : any ;
alljouerseqa : any ;
alljouerseqb : any ;
FormGroup: FormGroup;
public contactList: FormArray;



  constructor(    private activateRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,private partieservice : PartieService,
    private ToastService: Toast,private router: Router) { }

  ngOnInit(): void {
    this.FormGroup = this._formBuilder.group({
      butA: new FormControl("", [Validators.required]),
      butB: new FormControl("", [Validators.required]),
      
      contacts: this._formBuilder.array([this.createContact()])

        });
        this.contactList = this.FormGroup.get('contacts') as FormArray;

    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.partieservice.getpartiebyid(this.id).subscribe((res)=>{
      this.partie =res ;  
this.getAlljoueur(this.partie.equipeA.nom)
this.getAlljourjourB(this.partie.equipeB.nom)

    })

  }
  get contactFormGroup() {
    return this.FormGroup.get('contacts') as FormArray;
  }
  createContact(): FormGroup {
    return this._formBuilder.group({
      ida: new FormControl("", [Validators.required]),
      idb: new FormControl("", [Validators.required]),
      buta: new FormControl("", [Validators.required]),
      butb: new FormControl("", [Validators.required]),
   });
  }
  addContact() {
    this.contactList.push(this.createContact());
console.log(  this.contactList)

    }

  getAlljourjourB(nom){
    this.partieservice.getjoueurbyequipe(nom).subscribe((res)=>{
      this.alljouerseqb =res ;
      console.log(this.alljouerseqb)
    })
  
  }
getAlljoueur(nom){
  console.log(nom)
  this.partieservice.getjoueurbyequipe(nom).subscribe((res)=>{
    this.alljouerseqa =res ;
    console.log(this.alljouerseqa)
  })

}

addscore(){
  
  const listfinal =[];

  this.contactList.controls.forEach(element => {
  
    let buttest={
      but:element.value.buta,
      id:element.value.ida
    }
    let buttest2={
      but:element.value.butb,
      id:element.value.idb
    }
    const buta2 = [];
    const butb2 = [];
    buta2.push(buttest);
    butb2.push(buttest2);
    
    
    
      let but ={
    buta:buta2,
    butb:butb2
      }
    listfinal.push(but)
    console.log(listfinal)
  console.log(butb2)
  });





this.partieservice.addscore(this.FormGroup.value['butA'],this.FormGroup.value['butB'],this.id,listfinal).subscribe((res)=>{
  console.log(res)
    this.ToastService.success("ajouté avec succès");
    setTimeout(() => {
      this.router.navigate(["/admin/partie"]);
    }, 4000);
  }
)

}

}

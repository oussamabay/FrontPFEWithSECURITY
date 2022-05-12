import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { ArbiterService } from '../service';

@Component({
  selector: 'app-editarbitre',
  templateUrl: './editarbitre.component.html',
  styleUrls: ['./editarbitre.component.css']
})
export class EditarbitreComponent implements OnInit {
id : any ;
arbitre : any ;
FormGroup: FormGroup;

  constructor(private route: ActivatedRoute,private service :ArbiterService,
    private _formBuilder: FormBuilder,private router: Router,private ToastService: Toast
    ) { }

  ngOnInit(): void {
    this.FormGroup = this._formBuilder.group({
      nomprenomar: new FormControl("", [Validators.required]),
      adrar: new FormControl("", [Validators.required]),
      agear: new FormControl("", [Validators.required]),
        });
    
    this.id = this.route.snapshot.paramMap.get("id");
    this.service.getArbiterbyid(this.id).subscribe((res)=>{
this.arbitre=res ;
console.log(this.arbitre)

    })
  }
editarbitre(){
  this.service.updatearbitre(this.id,this.FormGroup.value['nomprenomar'],this.FormGroup.value['adrar'],this.FormGroup.value['agear']).subscribe((res)=>{
    console.log(res)
    if(res=="true"){
      this.ToastService.success("ajouté avec succès");
      setTimeout(() => {
        this.router.navigate(["/admin/arbitre"]);
      }, 4000);
    }
  });
  
}
}

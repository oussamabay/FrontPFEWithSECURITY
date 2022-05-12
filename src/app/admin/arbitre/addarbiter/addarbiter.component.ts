import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { ArbiterService } from '../service';

@Component({
  selector: 'app-addarbiter',
  templateUrl: './addarbiter.component.html',
  styleUrls: ['./addarbiter.component.css']
})
export class AddarbiterComponent implements OnInit {
  FormGroup: FormGroup;
  
  date1: Date;
  loading: boolean = false;
  profil : any ;
  routes:any ;
  constructor(private router: Router,private service :ArbiterService, private _formBuilder: FormBuilder,private ToastService: Toast) { }

  ngOnInit(): void {
    this.FormGroup = this._formBuilder.group({
      nomprenomar: new FormControl("", [Validators.required]),
      adrar: new FormControl("", [Validators.required]),
      agear: new FormControl("", [Validators.required]),
        });
    
  }
  addarbiter = () => {
    this.service.addarbitre(this.FormGroup.value['nomprenomar'],this.FormGroup.value['adrar'],this.FormGroup.value['agear']).subscribe((res)=>{
      console.log(res)
      if(res=="Ajouter avec succée"){
        this.ToastService.success("ajouté avec succès");
        setTimeout(() => {
          this.router.navigate(["/admin/arbitre"]);
        }, 4000);
      }
    });
    

    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { StadeService } from '../service';

@Component({
  selector: 'app-addstade',
  templateUrl: './addstade.component.html',
  styleUrls: ['./addstade.component.css']
})
export class AddstadeComponent implements OnInit {
  FormGroup: FormGroup;
  
  date1: Date;
  loading: boolean = false;
  profil : any ;
  routes:any ;
  constructor(private router: Router,private service :StadeService,
     private _formBuilder: FormBuilder,private ToastService: Toast) { }

  ngOnInit(): void {
    this.FormGroup = this._formBuilder.group({
      nomstade: new FormControl("", [Validators.required]),
      ville: new FormControl("", [Validators.required]),
      capacite: new FormControl("", [Validators.required]),
        });
    
  }
  addDepot = () => {
    this.service.addstade(this.FormGroup.value['nomstade'],this.FormGroup.value['ville'],this.FormGroup.value['capacite']).subscribe((res)=>{
      console.log(res)
      if(res=="true"){
        this.ToastService.success("ajouté avec succès");
        setTimeout(() => {
          this.router.navigate(["/admin/stade"]);
        }, 4000);
      }
    });
    

    }

}

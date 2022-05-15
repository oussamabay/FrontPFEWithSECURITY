import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { PortrService } from '../../port/port.service';
import { EquipeService } from '../service';

@Component({
  selector: 'app-addequipe',
  templateUrl: './addequipe.component.html',
  styleUrls: ['./addequipe.component.css']
})
export class AddequipeComponent implements OnInit {
  FormGroup: FormGroup;
  allport:any ;
  constructor(private _formBuilder: FormBuilder,private service : EquipeService,
    private ToastService: Toast,private router: Router, private portservice :PortrService) { }

  ngOnInit(): void {
    this.getallport();
    this.FormGroup = this._formBuilder.group({
      nom: new FormControl("", [Validators.required]),
      entraineur: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      port: new FormControl("", [Validators.required]),
        });
    
  
  }
  getallport(){
    this.portservice.getAllPort().subscribe((res)=>{
      this.allport =res ;
    })
  }
  addequipe(){
    console.log(this.FormGroup.value['date'])
this.service.addequipe(this.FormGroup.value['nom'],this.FormGroup.value['entraineur'],this.FormGroup.value['date'],this.FormGroup.value['port'])
.subscribe((res)=>{
  if(res=="true"){
    this.ToastService.success("ajouté avec succès");
    setTimeout(() => {
      this.router.navigate(["/admin/equipe"]);
    }, 4000);
  }


})
  }

}

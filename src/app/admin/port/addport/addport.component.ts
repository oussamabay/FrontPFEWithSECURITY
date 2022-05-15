import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { PortrService } from '../port.service';

@Component({
  selector: 'app-addport',
  templateUrl: './addport.component.html',
  styleUrls: ['./addport.component.css']
})
export class AddportComponent implements OnInit {
  FormGroup: FormGroup;

  constructor(private router: Router,private _formBuilder: FormBuilder,private ToastService: Toast,private service : PortrService) { }

  ngOnInit(): void {
    this.FormGroup = this._formBuilder.group({
      nomport: new FormControl("", [Validators.required]),
   
        });
  
  }
  addport = () => {
    this.service.addport(this.FormGroup.value['nomport']).subscribe((res)=>{
      console.log(res)
      if(res=="true"){
        this.ToastService.success("ajouté avec succès");
        setTimeout(() => {
          this.router.navigate(["/admin/port"]);
        }, 4000);
      }
    });
    

    }






}

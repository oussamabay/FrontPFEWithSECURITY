import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { StadeService } from '../service';

@Component({
  selector: 'app-edistade',
  templateUrl: './edistade.component.html',
  styleUrls: ['./edistade.component.css']
})
export class EdistadeComponent implements OnInit {
  id : any ;
  stade : any ;
  FormGroup: FormGroup;
  
  constructor(private route: ActivatedRoute,private service :StadeService,
    private _formBuilder: FormBuilder,private router: Router,private ToastService: Toast) { }

  ngOnInit(): void {
    this.FormGroup = this._formBuilder.group({
      nomstade: new FormControl("", [Validators.required]),
      ville: new FormControl("", [Validators.required]),
      capacite: new FormControl("", [Validators.required]),
        });
    
    this.id = this.route.snapshot.paramMap.get("id");
    this.service.getStadebyid(this.id).subscribe((res)=>{
this.stade=res ;
console.log(this.stade)

    })
  }
  edistade(){
    this.service.update(this.id,this.FormGroup.value['nomstade'],this.FormGroup.value['ville'],this.FormGroup.value['capacite']).subscribe((res)=>{
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { EquipeService } from '../service';

@Component({
  selector: 'app-editequipe',
  templateUrl: './editequipe.component.html',
  styleUrls: ['./editequipe.component.css']
})
export class EditequipeComponent implements OnInit {
  FormGroup: FormGroup;
id : any ;
equipe : any ;  
constructor(private _formBuilder: FormBuilder,private service : EquipeService,
    private ToastService: Toast,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
this.service.getequipebyid(this.id).subscribe((res)=>{
this.equipe=res ;
console.log(this.equipe)
})
    this.FormGroup = this._formBuilder.group({
      nom: new FormControl("", [Validators.required]),
      entraineur: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
        });
    
  
  }
  edit(){
    console.log(this.FormGroup.value['date'])
this.service.edit(this.id,this.FormGroup.value['nom'],this.FormGroup.value['entraineur'],this.FormGroup.value['date'])
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

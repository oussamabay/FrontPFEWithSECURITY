import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { VisiteurService } from './visiteur.service';

@Component({
  selector: 'app-visiteur',
  templateUrl: './visiteur.component.html',
  styleUrls: ['./visiteur.component.css']
})
export class VisiteurComponent implements OnInit {
allvisiteur : any ;
loading: boolean = false;

  constructor(private Visiteurservice : VisiteurService,private toast: Toast,private router: Router) { }

  ngOnInit(): void {
    this.getallvisiteur()
  }
getallvisiteur(){
  this.loading = true;

  this.Visiteurservice.getAllVisiteur().subscribe((res)=>{
this.allvisiteur=res ;
this.loading = false;

console.log(this.allvisiteur)
  })
}
update(id){
  this.Visiteurservice.activer(id).subscribe((res)=>{
    console.log(res)

    this.toast.success("Activation de compte est avec succès .");
    this.router.navigate(["admin/visiteur"]);

    location.reload();

  })
}

}

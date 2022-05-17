import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from 'src/app/shared/services/toast.service';
import { VisiteurService } from './visiteur.service';
import { ConfirmationService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { pdfservice } from 'src/app/shared/services/pdfservice';

@Component({
  selector: 'app-visiteur',
  templateUrl: './visiteur.component.html',
  styleUrls: ['./visiteur.component.css'],
  providers: [ConfirmationService, DatePipe, pdfservice],

})
export class VisiteurComponent implements OnInit {
allvisiteur : any ;
loading: boolean = false;
visiteur: { id: string; archived: boolean };

  constructor(private Visiteurservice : VisiteurService, 
    private ConfirmationService: ConfirmationService,
    private toast: Toast,private router: Router) { }

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

DeleteClientModal = ({ id, archived }) => {
  this.ConfirmationService.confirm({
    message: "Voulez-vous supprimer cet visiteur?",
    header: "Confirmation",
    icon: "pi pi-info-circle",
  });
  // client to be archived
  this.visiteur = { id, archived };
};

update(id){
  this.Visiteurservice.activer(id).subscribe((res)=>{
    console.log(res)

    this.toast.success("Activation de compte est avec succès .");
    this.router.navigate(["admin/visiteur"]);

    location.reload();

  })
}
supprimer(){
  this.Visiteurservice.delete(this.visiteur.id).subscribe((res)=>{
    console.log(res)

    this.toast.success("La suppression  de compte est avec succès .");
    this.router.navigate(["admin/visiteur"]);

    location.reload();

  })
}
cancel = () => {
  this.ConfirmationService.close();
};
}

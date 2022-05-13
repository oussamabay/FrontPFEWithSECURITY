import { Component, OnInit } from '@angular/core';
import { JoueurService } from './service';
import { Toast } from "src/app/shared/services/toast.service";
import { ConfirmationService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { pdfservice } from 'src/app/shared/services/pdfservice';

@Component({
  selector: 'app-joueur',
  templateUrl: './joueur.component.html',
  styleUrls: ['./joueur.component.css'],
  providers: [ConfirmationService, DatePipe, pdfservice],

})
export class JoueurComponent implements OnInit {

  constructor(private jouerservice : JoueurService,
    private ConfirmationService: ConfirmationService,
    private Toast: Toast
   ) { }
alljouer :any ;
loading: boolean = false;
joueur: { id: string; archived: boolean };

  ngOnInit(): void {
    this.getAlljoueur();
  }
  getAlljoueur(){
    this.jouerservice.getAllservice().subscribe((res)=>{
this.alljouer=res ;
    })
  }
  DeleteClientModal = ({ id, archived }) => {
    this.ConfirmationService.confirm({
      message: "Voulez-vous supprimer ce joueur?",
      header: "Confirmation",
      icon: "pi pi-info-circle",
    });
    // client to be archived
    this.joueur = { id, archived };
  };
  archiver(){
    this.loading = true;
  this.jouerservice.archiver(this.joueur.id).subscribe((res)=>{
    this.loading = false;
    this.Toast.success("joueur est supprimé avec succès");
    this.getAlljoueur();
    this.ConfirmationService.close();
  
  })
  }
  cancel = () => {
    this.ConfirmationService.close();
  };
  
}

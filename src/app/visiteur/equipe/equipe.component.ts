import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EquipeService } from './service';
import { Toast } from "src/app/shared/services/toast.service";
import { ConfirmationService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { pdfservice } from 'src/app/shared/services/pdfservice';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css'],
  providers: [ConfirmationService, DatePipe, pdfservice],

})
export class EquipeComponent implements OnInit {
allequipe : any ;
thumbnail: any;
listEquipeWithImg: any;
loading: boolean = false;
equipe: { id: string; archived: boolean };

  constructor(private Equipeservice :EquipeService,private sanitizer: DomSanitizer
    , private ConfirmationService: ConfirmationService,
    private Toast: Toast) { }

  ngOnInit(): void {
    this.getAllEquipe();
  }
getAllEquipe(){
this.Equipeservice.getAllEquipe().subscribe((res)=>{
  this.allequipe=res ;
  console.log(this.allequipe)
 
})
}
DeleteClientModal = ({ id, archived }) => {
  this.ConfirmationService.confirm({
    message: "Voulez-vous supprimer cet equipe?",
    header: "Confirmation",
    icon: "pi pi-info-circle",
  });
  // client to be archived
  this.equipe = { id, archived };
};
archiver(){
  this.loading = true;
this.Equipeservice.archiver(this.equipe.id).subscribe((res)=>{
  this.loading = false;
  this.Toast.success("equipe est supprimé avec succès");
  this.getAllEquipe();
  this.ConfirmationService.close();

})
}
cancel = () => {
  this.ConfirmationService.close();
};

}

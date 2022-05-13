import { Component, OnInit } from '@angular/core';
import { StadeService } from './service';
import { Toast } from "src/app/shared/services/toast.service";
import { ConfirmationService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { pdfservice } from 'src/app/shared/services/pdfservice';


@Component({
  selector: 'app-stade',
  templateUrl: './stade.component.html',
  styleUrls: ['./stade.component.css'],
  providers: [ConfirmationService, DatePipe, pdfservice]

})
export class StadeComponent implements OnInit {
allstade : any ;
stade: { id: string; archived: boolean };
loading: boolean = false;

constructor(private service :StadeService,
  private ConfirmationService: ConfirmationService,
  private Toast: Toast
) { }

  ngOnInit(): void {
    this.getAllStade();
  }
getAllStade(){
  this.service.getAllStade().subscribe((res)=>{
    this.allstade=res ;
    console.log(res)
  })
}
DeleteClientModal = ({ id, archived }) => {
  this.ConfirmationService.confirm({
    message: "Voulez-vous supprimer ce stade?",
    header: "Confirmation",
    icon: "pi pi-info-circle",
  });
  // client to be archived
  this.stade = { id, archived };
};
archiver(){
  this.loading = true;
this.service.archiver(this.stade.id).subscribe((res)=>{
  this.loading = false;
  this.Toast.success("stade est supprimé avec succès");
  this.getAllStade();
  this.ConfirmationService.close();

})
}
cancel = () => {
  this.ConfirmationService.close();
};
}

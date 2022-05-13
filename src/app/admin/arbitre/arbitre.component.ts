import { Component, OnInit } from '@angular/core';
import { ArbiterService } from './service';
import { Toast } from "src/app/shared/services/toast.service";
import { ConfirmationService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { pdfservice } from 'src/app/shared/services/pdfservice';

@Component({
  selector: 'app-arbitre',
  templateUrl: './arbitre.component.html',
  styleUrls: ['./arbitre.component.css'],
  providers: [ConfirmationService, DatePipe, pdfservice],

})
export class ArbitreComponent implements OnInit {
  allarbitre : any ;
  loading: boolean = false;
  arbiter: { id: string; archived: boolean };

  constructor(private Arbiterservice : ArbiterService,   
     private ConfirmationService: ConfirmationService,
    private Toast: Toast
    ) { }

  ngOnInit(): void {
this.getAllArbiter()

  }
getAllArbiter(){
  this.loading = true;

this.Arbiterservice.getAllArbiter().subscribe((res)=>{
  this.allarbitre =res ;
  this.loading = false;

  console.log(res)
})
}
DeleteClientModal = ({ id, archived }) => {
  this.ConfirmationService.confirm({
    message: "Voulez-vous supprimer ce arbitre?",
    header: "Confirmation",
    icon: "pi pi-info-circle",
  });
  // client to be archived
  this.arbiter = { id, archived };
};
archiver(){
  this.loading = true;
this.Arbiterservice.archiver(this.arbiter.id).subscribe((res)=>{
  this.loading = false;
  this.Toast.success("Arbitre est supprimé avec succès");
  this.getAllArbiter();
  this.ConfirmationService.close();

})
}
cancel = () => {
  this.ConfirmationService.close();
};

}

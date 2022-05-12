import { Component, OnInit } from '@angular/core';
import { PartieService } from './service';
import { Toast } from "src/app/shared/services/toast.service";
import { ConfirmationService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { pdfservice } from 'src/app/shared/services/pdfservice';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css'],
  providers: [ConfirmationService, DatePipe, pdfservice],

})
export class PartieComponent implements OnInit {
allpartie : any ;
loading: boolean = false;
  partie: { id: string; archived: boolean };

  constructor(private partieservice : PartieService,
    private ConfirmationService: ConfirmationService,
    private Toast: Toast) { }

  ngOnInit(): void {
    this.loading=true ;
    this.getAllPartie()
  }

  getAllPartie(){
    this.loading = true;

this.partieservice.getAllPartie().subscribe((res)=>{
this.allpartie=res ;
this.loading = false;

console.log(this.allpartie)
})
  }
  DeleteClientModal = ({ id, archived }) => {
    this.ConfirmationService.confirm({
      message: "Voulez-vous supprimer cet partie?",
      header: "Confirmation",
      icon: "pi pi-info-circle",
    });
    // client to be archived
    this.partie = { id, archived };
  };
  archiver(){
    this.loading = true;
  this.partieservice.archiver(this.partie.id).subscribe((res)=>{
    this.loading = false;
    this.Toast.success("partie est supprimé avec succès");
    this.getAllPartie();
    this.ConfirmationService.close();
  
  })
  }
  
}

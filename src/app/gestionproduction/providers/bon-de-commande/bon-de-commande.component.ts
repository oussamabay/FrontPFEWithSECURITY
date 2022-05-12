import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { pdfservice } from 'src/app/shared/services/pdfservice';
import { Toast } from 'src/app/shared/services/toast.service';
import { BonDeCommandeService } from '../service/bondecommande.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "../../../vfs_fonts";
import { Images } from 'src/app/logo';

@Component({
  selector: 'app-bon-de-commande',
  templateUrl: './bon-de-commande.component.html',
  styleUrls: ['./bon-de-commande.component.css'],
  providers: [DatePipe]

})
export class BonDeCommandeComponent implements OnInit {

  position: string;
  displayPosition: boolean;
  getallbc:any ;
  loading: boolean = false;
  contact : any ;
  searchTerm: string;
profil : any ;
route : any ;
  displayBasic: boolean;
  id:any ;
  constructor(private Bondecommandeservice : BonDeCommandeService,
    private datePipe: DatePipe,
    private ToastService:Toast,    private router: Router) {}
  myDate = new Date();

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.profil=user.profil ;
    if(this.profil=="Customer"){
      this.loading=true ;
      this.route = this.router.navigate(["/customer"]);
      this.loading=false ;
      }
      if(this.profil=="admin"){
        this.loading=true ;
        this.route = this.router.navigate(["/admin"]);
        this.loading=false ;
        }
    this.GetAllBC();
  }

  showBasicDialog(id)
  {
    this.id=id ;
    this.displayBasic = true;
this.addBlF(id);
  }
GetAllBC(){
  this.loading=true ;

this.Bondecommandeservice.getAllBondecommande().subscribe((res)=>{
  this.getallbc=res ;
  this.loading=false ;

  console.log(this.getallbc)
})
}
addBlF(id){
  console.log(id);

this.Bondecommandeservice.AddBlF(id).subscribe((res)=>{
console.log(res)
  if(res="true"){
    this.ToastService.success("Bonde de livraison recu avec succès");
      this.router.navigate(["/admin/bon-de-livraison"]);
}
})
}


generatePdf(u, format) {

      this.loading = false;
      let titre = "Bon de Commande";
      this.exportFile(u, format, titre);
 }
exportFile(u, format,titre) {

  let tab = [];
 tab.push(u);

  console.log(tab)
  var mDate = this.datePipe.transform(this.myDate, "dd-MM-yyyy");
var date = this.datePipe.transform(u.date, "dd-MM-yyyy");

  pdfMake.fonts = {
    Roboto: {
      normal: "DroidKufi-Regular.ttf",
      bold: "DroidKufi-Regular.ttf"
    }
  };

  var docDefinition = {
    content: [
      {
        columns: [
          {
            image: "data:image/png;base64," + Images.imgPdf,
            width: 60
          },


          {
            alignment: "right",
            text: "Tunis Le" + " " + date,
            fontSize: 15
          }
        ],
      },
      {
        text: "\n" +"Fournisseur : "+u.provider.contact.email   + "\n\n",
        fontSize: 16,
        alignment: "center",
      },{
        text: " La réference est :"+u.reference   + "\n\n",
        fontSize: 16,
        alignment: "center",

      },
      this.table( tab, ['libelle','prixunitaire', 'qte', 'prixtotal']),

    ],
    defaultStyle: {
      font: "Roboto"
    }
  };

  if (format == 'view') {
    pdfMake.createPdf(docDefinition).open();
  } else if (format == 'download') {
    pdfMake
      .createPdf(docDefinition)
      .download(titre);
  }
}
table(data, columns) {
  return {
    table: {
      headerRows: 1,
      widths: ['30%', '16%', '16%',   '20%'],
      alignment: 'center',
      body: this.buildTableBody(data, columns)
    }
    /* layout: {
       alignment: 'center',
       hLineWidth: function (i, node) { return 0; },
       vLineWidth: function (i, node) { return 0; },
       paddingTop: function (i, node) { return 5; },
       paddingBottom: function (i, node) { return 5; },
     }*/
  };
}
buildTableBody(data, columns) {
  var body = [];
  var columnHea = ['Libellé', 'Prix Unitaire', 'Quantité', 'Prix Total'];
  body.push(columnHea);

  data.forEach(function (row) {
    var dataRow = [];
    columns.forEach(function (column) {
      if (row[column] == null) {
        row[column] = '';
      }
      dataRow.push(row[column].toString());
    })
    body.push(dataRow);
  });
  return body;
}
ltr(inSt) {
  var outSt = inSt
    .split(" ")
    .reverse()
    .join(" "); //Str to Arr->Reverse array->toString
  return outSt;
}


}

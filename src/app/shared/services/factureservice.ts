import { Injectable } from "@angular/core";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "../../vfs_fonts";
import { DatePipe } from "@angular/common";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Injectable({ providedIn: "root" })
export class factureservice{
  myDate = new Date();

constructor(private datePipe :DatePipe  ){}

exportFile(u, format,titre) {

  let tab = [];
  u.forEach(element => {
    if(element.contact.titleid==1){
      element.contact.titleid="MR"
          }
          else {
            element.contact.titleid="MME"

          }
    tab.push(element.contact);

  });

  console.log(titre)
  var mDate = this.datePipe.transform(this.myDate, "dd-MM-yyyy");


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
            alignment: "left",
            text:
              "Kairos",
            fontSize: 15
          },
          {
            alignment: "right",
            text: "Tunis Le" + " " + mDate,
            fontSize: 15
          }
        ]
      },
      {
        text: "\n" +titre   + "\n\n",
        fontSize: 16,
        alignment: "center",
        decoration: "underline"
      },
      this.table( tab, ['email', 'lastname', 'firstname', 'titleid', 'telephone']),

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
      widths: ['25%', '16%', '16%', '10%',  '20%'],
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
  var columnHea = ['Email', 'Prenom', 'Nom', 'Sexe', 'Télephone'];
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


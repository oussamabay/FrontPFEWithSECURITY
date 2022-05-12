import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Hr } from '../../humain-ressources/model/hr';
import { hr } from '../../humain-ressources/services/hr.service';
import { ConfirmationService, PrimeNGConfig } from "primeng/api";
import { DatePipe } from "@angular/common";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "../../../vfs_fonts";
import { factureservice } from 'src/app/shared/services/factureservice';
import jsPDF from 'jspdf';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css'],
  providers: [ConfirmationService, DatePipe, factureservice],

})
export class FactureComponent implements OnInit {
  @ViewChild('content',{static :false}) el!: ElementRef ;

  hrs: Hr[];
  loading: boolean = false;
  constructor(private hrService: hr,    private pdfservi: factureservice,
    ) { }

  ngOnInit(): void {
  }


}

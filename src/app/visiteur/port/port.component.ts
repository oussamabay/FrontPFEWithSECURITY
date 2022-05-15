import { Component, OnInit } from '@angular/core';
import { PortrService } from './port.service';

@Component({
  selector: 'app-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.css']
})
export class PortComponent implements OnInit {
allport : any ;
loading: boolean = false;

  constructor(private portservice : PortrService ) { }

  ngOnInit(): void {
    this.getallport()
  }
getallport(){
  this.loading = true;

this.portservice.getAllPort().subscribe((res)=>{
  this.allport=res;
  this.loading = false;

  console.log(this.allport)
})
}



}

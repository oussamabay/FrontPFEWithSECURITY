import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DevisClientService } from '../service/devisclientservice';

@Component({
  selector: 'app-adddevis',
  templateUrl: './adddevis.component.html',
  styleUrls: ['./adddevis.component.css']
})
export class AdddevisComponent implements OnInit {
  form: FormGroup;
  public contactList: FormArray;
  allproduct: any ;
  allcurrency : any ;
  alltax : any ;
  profil : any ;
  loading: boolean = false;
  route:any ;
  constructor(private fb: FormBuilder,private router: Router,private devisservice :DevisClientService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.profil=user.profil ;
    if(this.profil=="admin"){
    this.loading=true ;
    this.route = this.router.navigate(["/admin"]);
    this.loading=false ;
    }
    if(this.profil=="Gestionnaire_Production"){
      this.loading=true ;
      this.route = this.router.navigate(["/Gestionnaire_Production"]);
      this.loading=false ;
      }
    this.Allproduct();
    this.AllCurrency();
    this.form = this.fb.group({

      desc: [null, Validators.compose([Validators.required])],

      contacts: this.fb.array([this.createContact()])
    });
    this.contactList = this.form.get('contacts') as FormArray;

  }
  get contactFormGroup() {
    return this.form.get('contacts') as FormArray;
  }
  createContact(): FormGroup {
    return this.fb.group({
      product :  [null, Validators.compose([Validators.required])],
      currency: [null, Validators.compose([Validators.required])],
      quantity :[null, Validators.compose([Validators.required])],
    });
  }

  addContact() {
    this.contactList.push(this.createContact());


    }

  submit() {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    const listfinal =[];
    this.contactList.controls.forEach(element => {


let products ={
  product:{
    description:element.value.product
  },

  currency:{
    description:element.value.currency
  },
  quantity :element.value.quantity}
  console.log(element.value.quantity)
listfinal.push(products);
    });
    console.log(listfinal)


   this.devisservice.ADDCotationClient(user.email,this.form.value.desc,listfinal).subscribe((res)=>{
      console.log(res)
    })

}
  Allproduct(){
this.devisservice.getAllProduct().subscribe((res)=>{
  this.allproduct =res ;
})
  }
  AllCurrency(){
    this.devisservice.getAllcurrency().subscribe((res)=>{
      this.allcurrency = res ;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-zalic',
  templateUrl: './zalic.page.html',
  styleUrls: ['./zalic.page.scss'],
})
export class ZalicPage implements OnInit {
  ionform: FormGroup;
  form: FormArray;
  isSubmitted = false;
  x1: number;
  x2: number;
  x3: number;
  x: number;
  data: any[];

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ionform = this.formBuilder.group({
      x1:['', [Validators.required, Validators.maxLength(5)]],
      x2:['', [Validators.required, Validators.maxLength(5)]],
      x3:['', [Validators.required, Validators.maxLength(5)]],
    })
  }

  subForm(x1:string, x2:string, x3:string, x:string){
    this.isSubmitted = true;
    if(!this.ionform.valid){
      console.log('Прошу надай всі необіхдні значення!')
      return false;
    } else {
      console.log(this.ionform.value)
    }
    this.x1 = parseFloat(x1);
    this.x2 = parseFloat(x2);
    this.x3 = parseFloat(x3);
    this.x = parseFloat(x);
    this.data=[];

    let pol;
    this.x=(-this.x2+Math.sqrt(this.x2*this.x2-4*this.x1*this.x3))/2*this.x1;
    pol=this.x1*this.x*this.x+this.x2*this.x+this.x3;
    let res = "P(x)="+pol.toFixed(2);
    this.data.push(res);
  }
}
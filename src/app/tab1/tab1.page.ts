import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  a: number;
  b: number;
  c: number;
  d: number;

  ras(a: string, b: string, c: string){
    this.a=parseFloat(a);
    this.b=parseFloat(b);
    this.c=parseFloat(c);

    if((this.a%7==0)&&(this.b%7==0)&&(this.c%7==0)) this.d=this.a*this.a*this.a+this.b*this.b*this.b+this.c*this.c*this.c
    else if((this.a%7==0)&&(this.b%7==0)) this.d=this.a*this.a*this.a+this.b*this.b*this.b
    else if((this.b%7==0)&&(this.c%7==0)) this.d=this.b*this.b*this.b+this.c*this.c*this.c
    else if((this.a%7==0)&&(this.c%7==0)) this.d=this.a*this.a*this.a+this.c*this.c*this.c
    else if((this.a%7==0)) this.d=this.a*this.a*this.a
    else if((this.b%7==0)) this.d=this.b*this.b*this.b
    else if((this.c%7==0)) this.d=this.c*this.c*this.c
  }

}
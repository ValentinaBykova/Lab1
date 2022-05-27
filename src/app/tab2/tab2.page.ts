import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  a:number;
  b:number;
  d:number;

  ras(a:string,b:string){
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.d=0;
    for(var _i=this.a;_i<=this.b;_i++){
      if(_i%11==0 && _i%8==5){
        this.d+=_i;
      }
    }
  }
}
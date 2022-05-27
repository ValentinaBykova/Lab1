import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  a:number [] [] =[];
  n:number;
  d:number;
  getRandomArbitatry(min,max){
    return Math.floor(Math.random()*(max-min)+min);
  }

  ras(n:string){
    this.n = parseFloat(n);
    let i:number = 0, j:number = 0;
    this.a=Array(this.n);
    console.log("created");

    for(i=0;i<this.n;i++){
      this.a[i]=Array(this.n);
      for(j=0;j<this.n;j++) {
        this.a[i][j]=this.getRandomArbitatry(1,10);
      }
    }
  }

  getmax(n: number, a : number){
    for(let i=0;i< this. n ;i++) {
    for (let j=0;j< this. n ;j++) { this.d = Math. max (a[i] [j])
    }}}
  
  getmin(n: number, a : number){
      for(let i=0;i< this. n ;i++) {
      for (let j=0;j< this. n ;j++) { this.d = Math. min (a[i] [j])
      }}}

  getColor(d:number){
    if(Math.max(d)>8) return "green"
    else if(Math.min(d)<2) return "blue"
    else 'none';
  }
}
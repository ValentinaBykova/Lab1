import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})

  export class AbstractClassPage implements OnInit {
    polynomial: Polynomial[];
    max: number =0;
    constructor() {}
  
    getRandomInt(max){
      return Math.floor(Math.random()*Math.floor(max));
    }
    ras(nn: string){
      this.polynomial=new Array();
      let n = parseInt(nn);
      for(let i=0; i<2*n; i++){
        this.polynomial.push(new Square("Квадратний", this.getRandomInt(10), this.getRandomInt(20), this.getRandomInt(20), this.getRandomInt(20)));
        this.polynomial.push(new Cubic("Кубічний", this.getRandomInt(10), this.getRandomInt(20), this.getRandomInt(20), this.getRandomInt(20), this.getRandomInt(20)));
      }
      this.max=0;
      this.polynomial.forEach((element)=>{
        element.xxx();
        if(this.max<element.x){
          this.max=element.x;
        }
        console.log(element.show());
        console.log(this.max);
      });
    }
  
    getColor(pol:number){
      return Math.abs(pol-this.max)<0.01? 'green':'';
    }
  
    ngOnInit() {
    }
  }
  abstract class Polynomial{
    name: string;
    a: number;
    b: number;
    c: number;
    d: number;
    x: number;
    constructor(){}

    show(){
      return "Назва: "+this.name+"Значення багаточлену: "+this.x.toFixed(2);
    }
    abstract xxx();
  }

  class Square extends Polynomial{
    constructor(public name: string, public a: number, public b: number, public c: number, public x: number){
      super();
    }
    xxx(){
      this.x=(-this.b+Math.sqrt(this.b*this.b-4*this.a*this.c))/2*this.a;
    }
  }

  class Cubic extends Polynomial{
    constructor(public name: string, public a: number, public b: number, public c: number, public d: number, public x: number){
      super();
    }
    xxx(){
      let j;
      j=(-this.b+Math.sqrt(this.b*this.b-4*this.a*this.c))/2*this.a;
      this.x=(-this.d)/j;
    }
  }

  export class Poly extends Cubic{
    constructor(public name: string, public a: number, public b: number, public c: number, public d: number, public x: number){
      super(name, a, b, c, d, x);
    }
    xxx(){
      let j;
      j=(-this.b+Math.sqrt(this.b*this.b-4*this.a*this.c))/2*this.a;
      this.x=(-this.d)/j;
    }
  }

  export {Cubic};
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas : ElementRef;
  lineChart : any;
  xn:number;
  xk:number;
  h:number;
  a:number;
  xx:string[];
  yy:number[];
  data1:string[];

  constructor() { Chart.register(...registerables);}

  ngOnInit() {
  }

  lineChartMethod(){
    if(this.lineChart instanceof Chart){
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas.nativeElement,{
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Графік функції',
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            borderDashOffset: 0.0,
            pointRadius: 1,
            data: this.yy,
            spanGaps: false,
          }
        ]
      }
    })
  }
  graphras( xn:string,xk:string,a:string,h:string){
    this.data1=[];
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x:number,y:number,i:number=0;
    x=this.xn;
    this.xx=new Array();
    this.yy=new Array();
    while(x<this.xk){
      if(x<=0) y=Math.abs(Math.pow((2*x)/(Math.pow(x,3)+2),1.0/3.0));
      else if (x<=this.a) y=(Math.sqrt(Math.sin(x*x+3))+4)/(x*x+2);
      else y=(Math.pow(Math.sin(x+2),3)/(Math.log(Math.abs(x*x+3*x+1))));
    
    this.xx.push(x.toFixed(1));
    this.yy.push(parseFloat(y.toFixed(1)));
    let s="x="+x.toFixed(1)+"y="+y.toFixed(1);
    this.data1.push(s);
    x=x+this.h;
    }
    this.lineChartMethod();
  }
}
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RecursionService } from '../service/recursion/recursion.service';
import { SeriesService } from '../service/series/series.service';
import { TabService } from '../service/tab/tab.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {

  @ViewChild('lineCanvas1') private lineCanvas1 : ElementRef;
  @ViewChild('lineCanvas2') private lineCanvas2 : ElementRef;
  @ViewChild('lineCanvas3') private lineCanvas3 : ElementRef;


  lineChart1 : any;
  lineChart2 : any;
  lineChart3 : any;
  xyTab=new Map();
  xySeries=new Map();
  xyRecursion=new Map();
  xyInput=new Map();
  xx:string[];
  yytab:number[];
  yyser:number[];
  yyrec:number[];


  constructor(private tabService:TabService,
    private seriesService:SeriesService,
    private recursionService:RecursionService) {Chart.register(...registerables); }

  ngOnInit() {
  }

    lineChartMethod(){
      if(this.lineChart1 instanceof Chart){
        this.lineChart1.destroy();
      }
      if(this.lineChart2 instanceof Chart){
        this.lineChart2.destroy();
      }
      if(this.lineChart3 instanceof Chart){
        this.lineChart3.destroy();
      }


      this.lineChart1 = new Chart(this.lineCanvas1.nativeElement, {
        type: 'line',
        data: {
          labels: this.xx,
          datasets: [
            {
              label: "Графік табулювання",
              fill:false,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderDashOffset: 0.0,
              pointRadius: 1,
              data: this.yytab,
              spanGaps: false,
            }
          ]
        }
      });
      this.lineChart2 = new Chart(this.lineCanvas2.nativeElement, {
        type: 'line',
        data: {
          labels: this.xx,
          datasets: [
            {
              label: "Графік розрахунку ряду",
              fill:false,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderDashOffset: 0.0,
              pointRadius: 1,
              data: this.yyser,
              spanGaps: false,
            }
          ]
        }
      });
      this.lineChart3 = new Chart(this.lineCanvas3.nativeElement, {
        type: 'line',
        data: {
          labels: this.xx,
          datasets: [
            {
              label: "Графік рекурсії",
              fill:false,
              borderColor: 'rgba(75, 192, 192, 1)',
              borderDashOffset: 0.0,
              pointRadius: 1,
              data: this.yyrec,
              spanGaps: false,
            }
          ]
        }
      });
    }

  input()
  {
    this.xx=new Array();
    this.yytab=new Array();
    this.yyser=new Array();
    this.yyrec=new Array();
    this.xyTab.forEach((value, key, map)=>{
      let s='';
      let y:number=0;
      y=value;
      this.yytab.push(parseFloat(y.toFixed(4)))
      s=y.toFixed(4)+' ';
      y=this.xySeries.get(key);
      this.yyser.push(parseFloat(y.toFixed(4)))
      s=s+y.toFixed(4);
      y=this.xyRecursion.get(key);
      this.yyrec.push(parseFloat(y.toFixed(4)))
      s=s+" "+y.toFixed(4);
      let x=key;
      this.xyInput.set(x.toFixed(2), s);
      this.xx.push(x.toFixed(1));
    })
  }

  ras(xn:string, xk:string, h:string)
  {
    let xn1=parseFloat(xn), xk1=parseFloat(xk), h1=parseFloat(h);
    console.log("Табулювання");
    this.xyTab=this.tabService.getTab(xn1, xk1, h1);
    console.log("Ряд");
    this.xySeries=this.seriesService.getTab(xn1, xk1, h1);
    console.log("Рекурсія");
    this.xyRecursion=this.recursionService.getTab(xn1, xk1, h1);
  
    this.input();
    this.lineChartMethod();
  }

}
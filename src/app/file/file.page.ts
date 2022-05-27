import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
  //масив з даними
  data: any=[];
  //видимість елементів
  showDetails:boolean[]=new Array(1000).fill(false);///можливо не потрібно !!!!!!!!
  //адреса файлу
  dataUrl='https://api.jsonbin.io/b/625564057b69e806cf4c5eaa';
  //обʼєкт для очікування
  loading: any;
  searchAuthor: string;

 constructor(public loadingController: LoadingController) { }
  //
  async load(){
    //
    this.loading=await this.loadingController.create({
      spinner:"bubbles",
      message:'Loading...'
    });
    //present the loading controller
    await this.loading.present();
    //
    fetch(this.dataUrl, {headers:{"secret-key":"$2b$10$/Rne06YrShidlf1Wc0Co9u02cguEszKzxlBb7GhDDW9cX.E0sOlvu"}}).then(res=>res.json())
    .then(json=>{
      this.data=json;
      console.log(this.data);
      this.loading.dismiss();
    });
  }

  searchBook(name: string){
    this.searchAuthor=name;
    console.log(this.searchAuthor);
  }

  getColor(name: string){
    return name===this.searchAuthor?'green':'';
  }

  ngOnInit() {
  }

}

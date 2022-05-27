import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {
show:IShow;
  constructor() { }

  ngOnInit() {
  }

  ras()
  {
    this.show=new Show_Console();
    let head=new Head("Lucy", 34, 7, this.show);
    head.eat();
    head.sleep();
    head.work();
    let teaher=new Teaher("Jonn", 33, 8, this.show);
    teaher.eat();
    teaher.sleep();
    teaher.work();
    teaher.be_beat();
    let student=new Student("Anna", 21, 7, this.show);
    student.eat();
    student.sleep();
    student.work();
    student.invent();
  }

}
interface ILive
{
  name:string;
  age:number;
}
interface ISleep
{
  hours_sum:number;
  sleep();
}
interface IEat
{
  eat();
}
interface IWork
{
  work();
}
interface IBeat
{
  be_beat();
}
interface IInvent
{
  invent();
}
interface IShow
{
  show(s:string);
}
export class Show_Console implements IShow
{
  show(s:string)
  {
    console.log(s);
  }
}
abstract class Person implements ILive, ISleep, IEat
{
  name:string;
  age:number;
  hours_sum:number;
  constructor(name:string, age:number, hours_sum:number)
  {
    this.name=name;
    this.age=age;
    this.hours_sum=hours_sum;
  }
  abstract sleep();
  abstract eat();
}
export class Head extends Person
{
  constructor(name:string, age:number, hours_sum:number, shower:IShow)
  {
    super(name, age, hours_sum)
    shower.show("Head of department "+this.name+", "+this.age+" years old. Sleeps "+this.hours_sum+" hours a day")
  }
  sleep()
  {
    console.log("I am sleeping");
  }
  eat()
  {
    console.log("I am eating");
  }
  work()
  {
    console.log("I am working");
  }
}
export class Teaher extends Head implements IBeat
{
  constructor(name:string, age:number, hours_sum:number, shower:IShow)
  {
    super(name, age, hours_sum, shower)
    shower.show("Theaher "+this.name+", "+this.age+" years old. Sleeps "+this.hours_sum+" hours a day")
  }
  be_beat() 
  {
    console.log("I am beat");
  }
}
export class Student extends Head implements IInvent
{
  constructor(name:string, age:number, hours_sum:number, shower:IShow)
  {
    super(name, age, hours_sum, shower)
    shower.show("Student "+this.name+", "+this.age+" years old. Sleeps "+this.hours_sum+" hours a day")
  }
  invent() 
  {
    console.log("I crated a new invention");
  }
}

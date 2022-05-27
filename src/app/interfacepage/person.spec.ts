import { Show_Console, Head } from './interfacepage.page';
import { Teaher } from './interfacepage.page';
import { Student } from './interfacepage.page';

describe('Shower testing', () => {
    let shower:Show_Console;

    beforeEach(()=>
    {
        shower=new Show_Console();
        spyOn(window.console, 'log');
    })

    fit("Створення екземпляру класу Shower", ()=>{
        expect(shower).toBeTruthy();
    })

    fit('shower.show() виводить повідомлення в консоль', function(){
        shower.show("some text");
        expect(window.console.log).toHaveBeenCalled();
      })
})
describe('Head of department testing', () => {
    let head:Head;
    let shower:Show_Console;

    beforeEach(()=>
    {
        shower=new Show_Console();
        head=new Head("Dan", 37, 7, shower);
        spyOn(window.console, 'log');
    })

    fit("Створення екземпляру класу Head", ()=>{
        expect(head).toBeTruthy();
    })

    fit('sleep() виводить повідомлення в консоль', function(){
        head.sleep();
        expect(window.console.log).toHaveBeenCalled();
      })

    fit('eat() виводить повідомлення в консоль', function(){
        head.eat();
        expect(window.console.log).toHaveBeenCalled();
    })
    fit('work() виводить повідомлення в консоль', function(){
        head.work();
        expect(window.console.log).toHaveBeenCalled();
    })
})
describe('Teaher testing', () => {
    let teaher:Teaher;
    let shower:Show_Console;

    beforeEach(()=>
    {
        shower=new Show_Console();
        teaher=new Teaher("Roman", 50, 10, shower);
        spyOn(window.console, 'log');
    })

    fit("Створення екземпляру класу Teaher", ()=>{
        expect(teaher).toBeTruthy();
    })

    fit('sleep() виводить повідомлення в консоль', function(){
        teaher.sleep();
        expect(window.console.log).toHaveBeenCalled();
      })

    fit('eat() виводить повідомлення в консоль', function(){
        teaher.eat();
        expect(window.console.log).toHaveBeenCalled();
    })

    fit('be_beat() виводить повідомлення в консоль', function(){
        teaher.be_beat();
        expect(window.console.log).toHaveBeenCalled();
    })
    fit('work() виводить повідомлення в консоль', function(){
        teaher.work();
        expect(window.console.log).toHaveBeenCalled();
    })
})
describe('Student testing', () => {
    let student:Student;
    let shower:Show_Console;

    beforeEach(()=>
    {
        shower=new Show_Console();
        student=new Student("Julia", 20, 6, shower);
        spyOn(window.console, 'log');
    })

    fit("Створення екземпляру класу Student", ()=>{
        expect(student).toBeTruthy();
    })

    fit('sleep() виводить повідомлення в консоль', function(){
        student.sleep();
        expect(window.console.log).toHaveBeenCalled();
      })

    fit('eat() виводить повідомлення в консоль', function(){
        student.eat();
        expect(window.console.log).toHaveBeenCalled();
    })

    fit('invent() виводить повідомлення в консоль', function(){
        student.invent();
        expect(window.console.log).toHaveBeenCalled();
    })
    fit('work() виводить повідомлення в консоль', function(){
        student.work();
        expect(window.console.log).toHaveBeenCalled();
    })
})
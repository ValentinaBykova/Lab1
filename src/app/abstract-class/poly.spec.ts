import {Poly} from './abstract-class.page';
import {Cubic} from './abstract-class.page';

describe ('Cubic Testing', ()=>{
    let cubic:Cubic;

    beforeEach(()=> {
        cubic=new Cubic('Кубічний', 10, 8, 3, 1, 0);
    });

    fit ('Створення екземляру класу', ()=>{
        expect(cubic).toBeTruthy();
    });

    fit('Розрахунок кубічного багаточлена, де а=10, b=8, с=3 та d=1', ()=>{
        cubic.xxx();
        let j=(-8+Math.sqrt(8*8-4*10*3))/2*10;
        let x=(-1)/j;
        expect(j.toFixed(2)).toBe(x.toFixed(2));
    });
});
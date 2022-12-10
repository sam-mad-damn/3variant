///задание 1
//let honda=new Car("Хонда", 2013, 500000);

import { Exam } from "./Exam.js";

//создание элементов массива
let Ivan = new Exam("Громов", "Иван", 4, 5, 5);
let Vika = new Exam("Звонкова", "Вика", 2, 4, 4);
let Sonya = new Exam("Эртельт", "Соня", 3, 3, 4);
let Roma = new Exam("Казанцев", "Роман", 2, 3, 3);
let Nastya = new Exam("Лаптева", "Настя", 5, 5, 5);
let arr = [Ivan, Vika, Sonya, Roma, Nastya];
let horoshisti = [];
let neDolzhniki = [];
let sred = 0;

console.table(arr)

//сортировка массива по среднему баллу
arr.sort(function (a, b) {
    if (a.sredBall > b.sredBall) {
        return -1;
    }
    if (a.sredBall < b.sredBall) {
        return 1;
    }
    // a = b
    return 0;
});
console.table(arr)


arr.forEach(item => {
    //вывод информации о студентах
    console.log(item.toString())
    if (item.isHoroshist) {
        //вывод информации о хорошистах
        console.log(`Студент ${item.surname} ${item.name} - хорошист`);
        horoshisti.push(item)
        neDolzhniki.push(item);
    }
    else {
        if (!item.isDolzhnik) {
            neDolzhniki.push(item);
        }
    };
    sred += item.sredBall;
})

let abs = neDolzhniki.length / arr.length * 100;
let kachestv = horoshisti.length / arr.length * 100;
console.log(`Качественная успеваемость: ${kachestv}%`);
console.log(`Абсолютная успеваемость: ${abs}%`);
console.log(`Средний балл: ${sred / arr.length}%`);
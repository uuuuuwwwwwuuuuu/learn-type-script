"use strict";
const user = {
    login: 'hih@gmai.com',
};
// function multuply(first: number, second?: number): number {     //опциональное значение аргумента функции
//     return !second ? first * first : first * second; 
// }
function multuply(first, second = 5) {
    return !second ? first * first : first * second;
}
console.log(multuply(5));

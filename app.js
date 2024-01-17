"use strict";
function logMiddleWare(data) {
    console.log(data);
    return data;
}
const res = logMiddleWare(10);
const arr = [3, 6, 7, 10, 5];
const result = 4 in arr;
console.log(result);

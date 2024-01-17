"use strict";
function toString(data) {
    if (typeof data === 'object') {
        return JSON.stringify(data);
    }
    return `${data}`;
}
console.log(toString({ name: 'Ivan', age: 30 }));

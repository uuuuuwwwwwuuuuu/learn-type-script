"use strict";
const data = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Ann' },
    { id: 3, name: 'Denis' }
];
const data2 = [
    { id: 2, name: 'Ann' },
    { id: 1, name: 'Ivan' },
    { id: 3, name: 'Denis' }
];
function sortData(data, method) {
    if (method) {
        switch (method) {
            case "ascending":
                return data.sort((a, b) => a.id - b.id);
            case "descending":
                return data.sort((a, b) => b.id - a.id);
        }
    }
    return data.sort((a, b) => a.id - b.id);
}
console.log(sortData(data, 'descending'));
console.log(sortData(data2));

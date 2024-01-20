"use strict";
class MyMap {
    constructor() {
        this.map = new Map();
    }
    clean() {
        this.map = new Map();
    }
    static get() {
        if (!MyMap.instance) {
            MyMap.instance = new MyMap();
        }
        return MyMap.instance;
    }
}
class Service1 {
    addMap(key, value) {
        const myMap = MyMap.get();
        myMap.map.set(key, value);
    }
}
class Service2 {
    getKeys(key) {
        const myMap = MyMap.get();
        return myMap.map.get(key);
    }
}
const service1 = new Service1();
const service2 = new Service2();
service1.addMap(1, 'something');
console.log(service2.getKeys(1));

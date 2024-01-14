"use strict";
var _Car_price;
class Car {
    constructor() {
        this.damages = []; //что бы было недоступно нигде вне класса (только в TS)
        _Car_price.set(this, void 0); //тоже самое что и в js
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
}
_Car_price = new WeakMap();
class EuroTrack extends Car {
    setDamage() {
        ///
    }
}

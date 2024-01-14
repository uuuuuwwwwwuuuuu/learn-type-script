"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(date) { }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
    }
}
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
    }
}
class Cart {
    constructor() {
        this.productList = [];
    }
    setId() {
        for (let i = 0; i < this.productList.length; i++) {
            this.productList[i].id = i + 1;
        }
    }
    addProduct(product) {
        this.productList.push(product);
        this.setId();
    }
    deleteProduct(id) {
        this.productList.splice(id - 1, 1);
        this.setId();
    }
    calcTotalPrice() {
        return this.productList.reduce((akb, element) => akb + element.price, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (this.productList.length !== 0 && this.delivery) {
            return true;
        }
        else {
            return false;
        }
    }
}
const cart = new Cart();
cart.addProduct(new Product('Tomato', 10));
cart.addProduct(new Product('Cucumber', 12));
cart.addProduct(new Product('Bread', 3));
console.log(cart.checkout());
console.log(cart);

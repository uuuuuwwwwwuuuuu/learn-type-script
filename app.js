"use strict";
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class ParsistedPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        // Сохраняет базу
    }
    pay(date) {
        if (date) {
            this.paidAt = date;
        }
    }
}
new ParsistedPayment();
class User {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super(...arguments);
        this.name = 'admin';
    }
}
new Admin();

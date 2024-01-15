"use strict";
class Payment {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date; //лучше юзать это, тогда с контекстом траблов нет
        };
    }
    getDate() {
        return this.date; //возвращает переменную date
    }
}
const payment = new Payment();
const user = {
    id: 1,
    paymentDate: payment.getDate //undefined, потому что getDate обращается к this, а в данном случаи this ссылается на объект user
};
// const user = {
//     id: 1,
//     paymentDate: payment.getDate.bind(payment)        //теперь всё работает корректно, так как мы указали на что должен ссылаться this
// }
// console.log(user.paymentDate())         //указывает на компайл ошибку так как не привязан контекст вызова
class PaymentPersistent extends Payment {
    save() {
        return super.getDate();
    }
}
console.log(new PaymentPersistent().save());

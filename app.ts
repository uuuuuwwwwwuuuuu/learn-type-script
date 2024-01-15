class Payment {
    private date: Date = new Date();

    getDate(this: Payment) {                //есть только на этапе TS и исключает возможность ошибки ниже
        return this.date    //возвращает переменную date
    }

    getDateArrow = () => {
        return this.date        //лучше юзать это, тогда с контекстом траблов нет
    }
}

const payment = new Payment();

const user = {
    id: 1,
    paymentDate: payment.getDate       //undefined, потому что getDate обращается к this, а в данном случаи this ссылается на объект user
}

// const user = {
//     id: 1,
//     paymentDate: payment.getDate.bind(payment)        //теперь всё работает корректно, так как мы указали на что должен ссылаться this
// }

// console.log(user.paymentDate())         //указывает на компайл ошибку так как не привязан контекст вызова


class PaymentPersistent extends Payment {
    save() {
        // return super.getDateArrow();
        return this.getDateArrow();          //если юзаю стрелочную функцию, то при наследованиии обращаться нужно к this, контекстом будет Payment
    }
}

console.log(new PaymentPersistent().save());
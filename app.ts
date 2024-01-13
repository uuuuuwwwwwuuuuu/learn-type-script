type PaymentStatus = 'new' | 'paid';

class Payment {
    id: number;
    status: PaymentStatus = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay() {
        this.status = 'paid';
    }
}

class ParsistedPayment extends Payment {
    dataBaseId: number;
    paidAt: Date;

    constructor() {
        const id = Math.random();
        super(id);
    }

    save() {
        // Сохраняет базу
    }

    override pay(date?: Date) {          //override
        if (date) {
            this.paidAt = date;
        }
    }
}

new ParsistedPayment()
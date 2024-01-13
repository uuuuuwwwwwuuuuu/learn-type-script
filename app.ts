enum PaymentStatus {
    HOLDED,
    PROCESSED,
    REVERSED
}

class Payment {
    id: number;
    status: PaymentStatus;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.HOLDED;
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPayment() {
        if (this.status === PaymentStatus.PROCESSED) {
            throw new Error('Платёж не может быть возвращён');
        }
        this.status = PaymentStatus.REVERSED;
        this.updatedAt = new Date();
    }
}

const payment = new Payment(1);
payment.unholdPayment();
console.log(payment)
const time = payment.getPaymentLifeTime();
console.log(time);

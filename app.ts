interface ILogger {
    log(...args: any): void;
    error(...args: any):  void;
}

class Logger implements ILogger {
    log(...args: any[]): void {
        console.log(...args);
    }
    error(...args: any[]): void {
        console.log(...args)
    }
}

interface IPayment {
    pay(paymentId: number): void;
    price?: number;
}

class User implements IPayment {
    pay(paymentId: number): void {
        //code
    }
    price?: number | undefined;

}
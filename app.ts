abstract class Logger {
    abstract log(message: string): void;  
    
    printDate(): void {
        const currentDate = new Date();
        this.log(currentDate.toString());
    }
}

class RealLogger extends Logger {
    log(message: string): void {
        console.log(message);
    }
}

const logger = new RealLogger();

logger.printDate();
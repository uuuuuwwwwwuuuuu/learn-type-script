"use strict";
class Logger {
    printDate() {
        const currentDate = new Date();
        this.log(currentDate.toString());
    }
}
class RealLogger extends Logger {
    log(message) {
        console.log(message);
    }
}
const logger = new RealLogger();
logger.printDate();

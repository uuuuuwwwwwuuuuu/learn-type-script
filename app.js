"use strict";
class Notify {
    send(template, to) {
        console.log(`Отправлаяю ${template}: to ${to}`);
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class Template {
    constructor() {
        this.templates = [
            { name: 'other', template: '<h1>Шаблон</h1>' }
        ];
    }
    getByName(name) {
        return this.templates.find(t => t.name === name);
    }
}
class NotificationFacade {
    constructor() {
        this.notify = new Notify();
        this.template = new Template();
        this.logger = new Log();
    }
    send(to, templateName) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.logger.log('Шаблон не найден');
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log("Шаблон отправлен");
    }
}
const service = new NotificationFacade();
service.send('a@a.gmail.com', 'othr');

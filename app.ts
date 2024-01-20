class Notify {
    send(template: string, to: string) {
        console.log(`Отправлаяю ${template}: to ${to}`);
    }
}

class Log {
    log(message: string) {
        console.log(message);
    }
}

class Template {
    private templates = [
        {name: 'other', template: '<h1>Шаблон</h1>'}
    ]

    getByName(name: string) {
        return this.templates.find(t => t.name === name);
    }
}

class NotificationFacade {
    private notify: Notify;
    private logger: Log;
    private template: Template;

    constructor() {
        this.notify = new Notify();
        this.template = new Template();
        this.logger = new Log();
    }

    send(to: string, templateName: string) {
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
service.send('a@a.gmail.com', 'other');
service.send('a@a.gmail.com', 'rndt');
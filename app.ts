interface Observer {
    update(subject: Subject): void;
}

interface Subject {
    attach(observer: Observer): void;       //подписка на уведы
    detach(observer: Observer): void;       //отписка от увед
    notify(): void;                         //сама уведа об изменении
}

class Lead {
    constructor (public name: string, public phone: string) {}
}

class NewLead implements Subject {
    private observers: Observer[] = [];
    public state: Lead;
    
    attach(observer: Observer): void {
        if (this.observers.includes(observer)) {
            return;
        }
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex - 1) {
            return
        }
        this.observers.splice(observerIndex, 1);
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}

class NotificationService implements Observer {
    update(subject: Subject): void {
        console.log('NotificationService получуил уведу');
        console.log(subject);
    }
}

class LeadService implements Observer {
    update(subject: Subject): void {
        console.log('LeadService получуил уведу');
        console.log(subject);
    }
}

const subject = new NewLead();
subject.state = new Lead('Ivan', '+42358934932');
const s1 = new NotificationService();
const s2 = new LeadService();

subject.attach(s1);
subject.attach(s2);
subject.notify();
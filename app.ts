interface IPrototype<T> {
    createdAt: Date;
    clone(): T;
}

class UserHistory implements IPrototype<UserHistory> {
    createdAt: Date;

    constructor(public email: string, public name: string) {
        this.createdAt = new Date();
    }

    clone(): UserHistory {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}

let user = new UserHistory('a@3gmail.com', 'Ivan');
console.log(user);
setTimeout(() => {
    let user2 = user.clone();
    user2.email = 'ofjcewpoew';
    console.log(user2);
}, 1000);
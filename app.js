"use strict";
class UserHistory {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.createdAt = new Date();
    }
    clone() {
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

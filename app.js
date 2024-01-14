"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
// class Users extends Array<User> {        //Так себе вариант
//     searchByName(name: string) {
//         return this.filter(u => u.name === name);
//     }
// }
// const users = new Users();
class UserList {
    constructor() {
        this.users = [];
    }
    push(user) {
        this.users.push(user);
    }
    getUsersToString() {
        return this.users.map((user) => user.name).join(', ');
    }
}
const users = new UserList();
users.push(new User('Petter'));
users.push(new User('Ivan'));
users.push(new User('Ann'));
console.log(users.getUsersToString());

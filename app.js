"use strict";
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUsersInDataBase() {
        return this.users;
    }
}
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
console.log(new UserService().getUsersInDataBase());
console.log(nullUser(new UserService()).getUsersInDataBase());

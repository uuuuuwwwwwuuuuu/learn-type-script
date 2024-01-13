"use strict";
class User {
    set login(login) {
        this._login = 'user-' + login;
    }
}
const user = new User();
user.login = 'myLogin';
console.log(user);

"use strict";
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdmin() {
        return this instanceof AdminBuilder;
    }
}
class AdminBuilder extends UserBuilder {
}
const res = new UserBuilder().setName('Ivan'); //возвращает UserBuilder
const res2 = new AdminBuilder().setName('Ivan'); //теперь возвращает AdminBuilder, так как this ссылается уже на AdminBuilder
let user = new UserBuilder();
if (user.isAdmin()) {
    console.log(user);
}
else {
    console.log(user);
}

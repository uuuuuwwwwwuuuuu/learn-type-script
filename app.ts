class UserBuilder {
    name: string;

    setName(name: string): this {           //если я хочу вернуть этот же класс
        this.name = name;
        return this
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder;
    }
}

class AdminBuilder extends UserBuilder {
    roles: string[];
}

const res = new UserBuilder().setName('Ivan');          //возвращает UserBuilder
const res2 = new AdminBuilder().setName('Ivan');        //теперь возвращает AdminBuilder, так как this ссылается уже на AdminBuilder

let user: UserBuilder | AdminBuilder = new UserBuilder();

if (user.isAdmin()) {
    console.log(user);
} else {
    console.log(user);
}
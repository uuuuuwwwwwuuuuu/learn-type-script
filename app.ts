class User {
    name: string;

    constructor(name: string) {
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
    users: User[] = [];

    push(user: User) {
        this.users.push(user);
    }

    getUsersToString() {
        return this.users.map((user: User) => user.name).join(', ');
    }
}

const users = new UserList();
users.push(new User('Petter'));
users.push(new User('Ivan'));
users.push(new User('Ann'));


console.log(users.getUsersToString());

class Payment {
    date: Date;
}

// class UserWithPayment extends Payment {  //Так не надо
//     name: string;
// }

class UserWithPayment {
    user: User;
    payment: Payment;

    constructor(user: User, payment: Payment) {
        this.payment = payment;
        this.user = user;
    }
}
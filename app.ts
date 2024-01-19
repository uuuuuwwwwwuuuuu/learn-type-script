interface IUserService {
    users: number;
    getUsersInDataBase(): number
}

@threeUserAdvanced
class UserService implements IUserService {
    users: number = 1000;

    getUsersInDataBase(): number {
        return this.users;
    }
}

function nullUser(target: Function) {           //не работает
    target.prototype.users = 0
}

function threeUserAdvanced<T extends { new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}

console.log(new UserService().getUsersInDataBase());            //Выводит 3
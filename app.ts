interface IUserService {
    users: number;
    getUsersInDataBase(): number
}

@setUsers(2)
// @threeUserAdvanced
// @createClassWithUsers(5)
class UserService implements IUserService {
    users: number;

    getUsersInDataBase(): number {
        return this.users;
    }
}

function nullUser(target: Function) {           //Жёстко заданно (дикоратор)
    target.prototype.users = 0
}

function setUsers(users: number) {              //Позволяет изменять (фабрика дикораторов)
    return (target: Function) => {
        target.prototype.users = users;
    }
}

function threeUserAdvanced<T extends { new(...args: any[]): {}}>(constructor: T) {      //Жёстко заданно (дикоратор)
    return class extends constructor {
        users = 3;
    }
}

function createClassWithUsers(users: number) {                                             //Позволяет изменять (фабрика дикораторов)
    return <T extends { new(...args: any[]): {}}>(constructor: T) => {  //создаёт класс на основе дикорируемого класса и позволяет задавать свои параметры
        return class extends constructor {
            users = users;
        }
    }
}

console.log(new UserService().getUsersInDataBase());            //Выводит 3
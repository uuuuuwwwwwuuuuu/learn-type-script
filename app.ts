interface IUserService {
    users: number;
    getUsersInDataBase(): number
}

class UserService implements IUserService {
    users: number = 1000;

    getUsersInDataBase(): number {
        return this.users;
    }
}

function nullUser(obj: IUserService) {
    obj.users = 0
    return obj;
}

function logUser(obj: IUserService) {
    console.log("Users: " + obj.users)
    return obj;
}

console.log(new UserService().getUsersInDataBase());
console.log(nullUser(new UserService()).getUsersInDataBase());
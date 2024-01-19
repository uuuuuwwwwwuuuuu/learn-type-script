interface IUserService {
    users: number;
    getUsersInDB(): number;
}

@createdAt
class UserService implements IUserService {
    users: number = 1000;
    
    getUsersInDB(): number {
        return this.users;
    }
}

function createdAt<T extends {new (...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        createdAt = new Date();
    }
}

type createdAt = {
    createdAt: Date;
}

console.log(new UserService() as IUserService & createdAt);
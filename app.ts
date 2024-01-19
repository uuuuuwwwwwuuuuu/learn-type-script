interface IUserService {
    users: number;
    getUsersInDB(): number;
}

class UserService implements IUserService {
    users: number;

    @Log
    getUsersInDB(): number {
        throw new Error('Error');
    }
}

function Log(
    target: Object,
    propKey: string,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
    
    descriptor.value = () => {
        console.log('no error');
        
    }
}

console.log(new UserService().getUsersInDB());
const a: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends 'success' | 'failed'> {
    code: number;
    data: T extends 'success' ? string : Error;
}

const suc: HTTPResponse<'success'> = {
    code: 200,
    data: 'done'
}

const err: HTTPResponse<"failed"> = {
    code: 404,
    data: new Error()
}

class User {
    id: number;
    name: string;
}

class UserPersistend extends User{
    dbId: string;
}

// function getUser(id: number): User;
// function getUser(dbId: string): UserPersistend;
// function getUser(dbIdOrId: string | number): User | UserPersistend {            //Перегрузка
//     if (typeof dbIdOrId === 'number') {
//         return new User();
//     } else {
//         return new UserPersistend(); 
//     }
// }

type UserOrUserPErsistend<T extends string | number> = T extends number ? User : UserPersistend;

function getUser<T extends string | number>(id: T): UserOrUserPErsistend<T> {
    if (typeof id === 'number') {
        return new User() as UserOrUserPErsistend<T>;
    } else {
        return new UserPersistend(); 
    }
}

const res = getUser(1);
const res2 = getUser('stgoe');
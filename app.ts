// let a: number = 5;
// let b: string = a.toString();

// let c = 'verver';
// let d: number = parseInt(c);

interface User {
    name: string;
    email: string;
    login: string;
}

const user: User = {
    name: "Вася",
    email: 'bever@gmail.com',
    login: 'vavasilii'
}

interface Admin {
    name: string;
    role: number
}

// const admin: Admin = {          //так себе
//     ...user,
//     role: 1
// }

function userToAdmin(user: User): Admin {           //норм
    return {
        name: user.name,
        role: 1
    }
}
interface User {
    name: string, 
    age: number, 
    skills: string[],
    log: (id: number) => string
}

interface UserWithRole extends User {
    roleId: number
}

let user: UserWithRole  = {
    name: "Denis",
    age: 18,
    skills: ['1', '2'],
    roleId: 10,
    log(id) {
        return '';
    }
}

interface UserDic {
    [index: number]: User
}
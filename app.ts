interface User {
    login: string,
    password?: string           //опционально (может быть, а может и не быть)
}

const user: User = {
    login: 'hih@gmai.com',
}

// function multiply(first: number, second?: number): number {     //опциональное значение аргумента функции
//     return !second ? first * first : first * second; 
// }

function multiply(first: number, second: number = 5): number {     //дефолтное значение аргумента функции
    return !second ? first * first : first * second; 
}

multiply(5);

interface UserPro {
    login: string,
    password?: {
        type: 'primary' | 'secondary'
    };
}

function testPass(user: UserPro) {
    const type = user.password?.type            //Если этот параметр, вернётся этот параметр, или undefined
}

function test(param?: string) {
    const res = param ?? multiply(5, 2);        //param ? param : multiply(5, 2);
}
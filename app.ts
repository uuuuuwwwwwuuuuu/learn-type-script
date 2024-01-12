function logId(id: string | number): void {     //ничего не возвращает
    console.log(id);
}

function multiplt(first: number, second?: number): number | void {
    if (!second) {
        return first ** 2;
    }
}

type voidFunc = () => void;

const f1: voidFunc = () => {

}

const f2: voidFunc = () => {
    return true; 
}

const b = f2() //вурнёт void не смотря на return true

const skills = ['Dev', 'DevOps']

const user: {s: string[]} = {
    s: []
}

skills.forEach((skill) => user.s.push(skill)); 
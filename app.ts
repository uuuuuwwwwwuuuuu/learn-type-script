let strOrNum: string | number = 5;

if (Math.random() > 0.5) {
    strOrNum = 5;
} else {
    strOrNum = 'str';
}

if (typeof strOrNum == 'string') {
    console.log(strOrNum);
} else {
    console.log(strOrNum);
}

let strOrNumber: typeof strOrNum;

const user = {
    name: "Вася"
};

type keyOfUser = keyof typeof user;

enum Direction {
    up,
    down
}
type d = keyof typeof Direction;
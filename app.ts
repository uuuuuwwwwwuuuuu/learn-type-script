let input: unknown;

input = 3;
input = ['fcwe', 'vwwd'];

// let res: string = input;        //ошибка

function run(i: unknown) {         //приведение типа
    switch (typeof i) {
        case "number":
            i++;
            break;
        default:
            i
            break;
    }
}

run(input);

// async function getData() {
//     try {
//         await fetch('')
//     } catch(error) {
//         const e = error as Error;
//     }
// }

async function getData() {
    try {
        await fetch('')
    } catch(error) {
        if (error instanceof Error) {
            console.log(error)                  //Лучше так
        }
    }
}

type union = unknown | string;     //unknown
type intersection = unknown & string;     //string

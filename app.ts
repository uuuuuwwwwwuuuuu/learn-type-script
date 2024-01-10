function logId(id: string | number | boolean) {
    switch (typeof id) {
        case 'number':
            console.log(id + 1);
            break;
        case 'boolean':
            console.log(!id);
            break;
        case 'string':
            console.log(id.toLowerCase());
            break;
    }
}

logId(1);
logId('FkovDoVoF');
logId(true);

function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err.toUpperCase());
    }
}

function logObj(obj: {a: number} | {b: number}) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}
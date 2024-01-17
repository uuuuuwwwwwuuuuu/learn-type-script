function logMiddleWare<T>(data: T): T {
    console.log(data);
    return data
}

const res = logMiddleWare<number>(10);

function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const length = data.length / 2;
    return data.splice(0, length);
}


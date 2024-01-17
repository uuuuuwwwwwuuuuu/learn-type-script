function getSplitHalf<T>(data: Array<T>): Array<T> {
    const length = data.length / 2;
    return data.splice(0, length);
}

const split: <T>(data: Array<T>) => Array<T> = getSplitHalf;

interface ILogLine<T> {
    timeStamp: Date;
    data: T
}

const logLine: ILogLine<{a: number}> = {
    timeStamp: new Date(),
    data: {
        a: 1
    }
}
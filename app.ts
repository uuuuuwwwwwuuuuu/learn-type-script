function toString<T>(data: T): string {
    if (typeof data === 'object') {
        return JSON.stringify(data);
    }
    return `${data}`;
}
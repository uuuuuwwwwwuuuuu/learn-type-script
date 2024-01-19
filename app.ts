interface IData {
    group: number;
    name: string
}

const data: IData[] = [
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
	{ group: 2, name: 'c' },
];

interface IGroup<T> {
    [key: string]: T[];
}

type key = number | string | symbol;

function group<T extends Record<key, any>>(array: T[], key: keyof T): IGroup<T> {
    return array.reduce<IGroup<T>>((akb: IGroup<T>, item) => {
        const itemKey = item[key];
        let currentEl = akb[itemKey];
        if (Array.isArray(currentEl)) {
            currentEl.push(item);
        } else {
            currentEl = [item];
        }
        akb[itemKey] = currentEl;
        return akb;
    }, {});
}

group(data, 'group');
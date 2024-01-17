const data = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Ann'},
    {id: 3, name: 'Denis'}  
];

const data2 = [
    {id: 2, name: 'Ann'},
    {id: 1, name: 'Ivan'},
    {id: 3, name: 'Denis'}  
];

type method = 'ascending' | 'descending';

function sortData<T extends {id: number}>(data: Array<T>, method?: method): Array<T> {
    if (method) {
        switch (method) {
            case "ascending":
                return data.sort((a, b) => a.id - b.id);
            case "descending":
                return data.sort((a, b) => b.id - a.id);
        }
    }

    return data.sort((a, b) => a.id - b.id);
}

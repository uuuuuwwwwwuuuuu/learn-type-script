function getFullName(user: {firstName: string, surName: string}): string {
    return `${user.firstName} ${user.surName}`;
}

const user = {
    firstName: 'Denis',
    surName: 'Voronin',
    city: 'Minsk',
    age: 18
};

console.log(getFullName(user));
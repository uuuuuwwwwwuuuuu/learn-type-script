// type httpMethod = 'post' | 'get'; alias

// function fetchWithAuth (url: string, method: httpMethod) {

// }

type User = {name: string, age: number, skills: string[]}
type Role = {id: number};
type UserWithRole = User & Role;


let user: UserWithRole  = {
    name: "Denis",
    age: 18,
    skills: ['1', '2'],
    id: 2
}
// enum RequestType {
//     GET = 'GET',
//     POST = 'POST'
// }

// function fetchWithAuth(url: string, method: RequestType) {
//     ...
// }

function fetchWithAuth(url: string, method: 'post' | 'get') {

}

fetchWithAuth('http//:google.com', 'get');

let method = 'post';

fetchWithAuth('http//:google.com', method as 'post');
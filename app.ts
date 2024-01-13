class User {
    _login: string;
    password: string;

    set login(login: string) {
        this._login = 'user-' + login
    }

    get login() {
        return this._login;
    }
}

const user = new User()
user.login = 'myLogin';
console.log(user);
class User {                    //создаём юзера, у которого есть токен авторизации
    githubToken: string;
    jwtToken: string;
}

interface AuthStrategy {        //интерфейс, описывающий метод авторизации юзера
    auth(user: User): boolean;
}

class Auth {                    //непосредственный класс авторизации, позволяющий выбрать через что авторизоваться и авторизовывает пользователя
    constructor (private strategy: AuthStrategy) {}

    setStrategy(strategy: AuthStrategy) {
        this.strategy = strategy;
    }

    authUser(user: User): boolean {
        return this.strategy.auth(user);        //описанный ниже метод для авторизации
    }
}

class JWTStrategy implements AuthStrategy {
    auth(user: User): boolean {             //здесь должна быть логика проверки в API наличия токена пользователя для регистрации через JWT
        if (user.jwtToken) {
            return true;
        }
        return false;
    }
}

class GitHubStrategy implements AuthStrategy {      //Тоже самое только через GitHub
    auth(user: User): boolean {
        if (user.githubToken) {
            return true;
        }
        return false;
    }
}

const user = new User();
user.jwtToken = 'token';
const auth = new Auth(new JWTStrategy());
console.log(auth.authUser(user));       //true так как есть JWT токен
auth.setStrategy(new GitHubStrategy());
console.log(auth.authUser(user));       //false так как нет GitHub токена

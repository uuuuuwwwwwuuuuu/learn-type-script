"use strict";
class Controller {
    handleWithLogs(req) {
        console.log('start');
        this.handle(req);
        console.log('end');
    }
}
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
// new Controller() - error     абстрактные классы нельзя инстансиировать, только использовать в наследовании
const user = new UserController();
user.handleWithLogs('Request');

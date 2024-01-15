abstract class Controller {
    abstract handle(req:any): void;

    handleWithLogs(req: any) {
        console.log('start');
        this.handle(req);
        console.log('end');
    }
}

class UserController extends Controller{
    handle(req: any): void {
        console.log(req)
    }
}

// new Controller() - error     абстрактные классы нельзя инстансиировать, только использовать в наследовании

const user = new UserController();
user.handleWithLogs('Request');
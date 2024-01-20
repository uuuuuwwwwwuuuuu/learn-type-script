interface IMiddleware {                         //суть паттерна заключается в оверрайде метода на каждом этапе и передаче запроса дальше
    next(mid: IMiddleware): IMiddleware;        //параллельно отлавливая ошибки
    handle(req: any): any;
}

abstract class AbstractMiddleware implements IMiddleware{
    private nextMiddleware: IMiddleware;

    next(mid: IMiddleware): IMiddleware {
        this.nextMiddleware = mid;
        return mid;
    }

    handle(req: any) {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(req);
        }
        return;
    }
}

class AuthMiddleware extends AbstractMiddleware {
    override handle(req: any) {
        console.log('AuthMiddleware');
        if (req.userId === 1) {
            return super.handle(req);
        }
        return { error: 'Вы не авторизованны' };
    }
}

class ValidateMiddleware extends AbstractMiddleware {
    override handle(req: any) {
        console.log('ValidateMiddleWare');
        if (req.body) {
            return super.handle(req);
        }
        return { error: 'Нет body' };
    }
}

class Controller extends AbstractMiddleware {
    override handle(req: any) {
        console.log('Controller');
        return { success: req };
    }
}

const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();

auth.next(validate).next(controller);

console.log(auth.handle({
    userId: 1,
    body: 'Ivan'
}));
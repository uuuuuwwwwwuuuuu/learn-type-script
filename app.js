"use strict";
class AbstractMiddleware {
    next(mid) {
        this.nextMiddleware = mid;
        return mid;
    }
    handle(req) {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(req);
        }
        return;
    }
}
class AuthMiddleware extends AbstractMiddleware {
    handle(req) {
        console.log('AuthMiddleware');
        if (req.userId === 1) {
            return super.handle(req);
        }
        return { error: 'Вы не авторизованны' };
    }
}
class ValidateMiddleware extends AbstractMiddleware {
    handle(req) {
        console.log('ValidateMiddleWare');
        if (req.body) {
            return super.handle(req);
        }
        return { error: 'Нет body' };
    }
}
class Controller extends AbstractMiddleware {
    handle(req) {
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

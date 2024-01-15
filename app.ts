class UserService {
    static db: any;
    
    create() {                              //доступнно для инстанса
        UserService.db                      //обращение к статик в классе
    }

    static async getUser(id: number) {            //не доступно для инстанса
        return await UserService.db.findById(id);
    }

    static {
        ///
    }
}

UserService.db      //К static свойствам можно обращаться не создаая инстанс

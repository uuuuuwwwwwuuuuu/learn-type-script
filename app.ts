class Car {
    public make: string;                    //по дефолту
    private damages: string[] = [];         //что бы было недоступно нигде вне класса (только в TS)
    private _model: string;
    #price: number;                         //тоже самое что и в js

    protected run: number;                  //тоже самое, только доступно наследникам (только в TS)

    set model(model: string) {
        this._model = model;
    }

    get model() {
        return this._model;
    }

    addDamage(damage: string) {
        this.damages.push(damage)
    }
}

class EuroTrack extends Car {
    setDamage() {
        ///
    }
}

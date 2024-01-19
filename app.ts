interface IUserService {
    users: number;
    getUsersInDB(): number;
}

class UserService implements IUserService {
    @Max(100)
    users: number;

    getUsersInDB(): number {
        throw new Error('Ошибка');
    }
}

function Max(max: number) {
    return (
        target: Object,
        propKey: string | symbol
    ) => {
        let value: number;
        const setter = (newValue: number) => {                      //логика для сетера
            if (newValue > max) {
                console.log(`Нельзя установить значение больше чем ${max}`);
            } else {
                value = newValue;
            }
        }

        const getter = () => {                                      //логика для гетера
            return value
        }

        Object.defineProperty(target, propKey, {                    //присвоение для свойства гетера и сетера
            set: setter,
            get: getter
        });
    }
}

const user = new UserService();
user.users = 1;
console.log(user.users)
user.users = 101;
console.log(user.users)
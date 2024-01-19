"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class UserService {
    getUsersInDB() {
        throw new Error('Ошибка');
    }
}
__decorate([
    Max(100)
], UserService.prototype, "users", void 0);
function Max(max) {
    return (target, propKey) => {
        let value;
        const setter = (newValue) => {
            if (newValue > max) {
                console.log(`Нельзя установить значение больше чем ${max}`);
            }
            else {
                value = newValue;
            }
        };
        const getter = () => {
            return value;
        };
        Object.defineProperty(target, propKey, {
            set: setter,
            get: getter
        });
    };
}
const user = new UserService();
user.users = 1;
console.log(user.users);
user.users = 101;
console.log(user.users);

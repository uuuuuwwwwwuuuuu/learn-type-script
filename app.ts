class Form {
    constructor (public name: string) { }          //форма с данными
}

abstract class SaveForm<T> {
    save(form: Form) {
        const res = this.fill(form);
        this.log(res);
        this.send(res);
    }

    protected abstract fill(form: Form): T;         //метод по заполнению формы, которую выше мы сохраним в переменную res (метод будет описан ниже)

    protected log(data: T): void {                  //метод по логированию данных перед отправкой
        console.log(data);                          
    }

    protected abstract send(data: T): void;         //метод по отправке данныъ (так же будет описан ниже для каждого унаследованного класса)
}

class FirstAPI extends SaveForm<string> {
    protected fill(form: Form): string {
        return form.name;
    }
    protected send(data: string): void {
        console.log(`Отправляю ${data}`);
    }
}

class SecondAPI extends SaveForm<{fio: string}> {
    protected fill(form: Form): {fio: string} {
        return {fio: form.name};
    }
    protected send(data: {fio: string}): void {
        console.log(`Отправляю ${data}`);
    }
}

const form1 = new FirstAPI();
form1.save(new Form('Ivan'));

const form2 = new SecondAPI();
form2.save(new Form('Vasya'));
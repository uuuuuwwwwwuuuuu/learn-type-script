"use strict";
class KVDataBase {
    constructor() {
        this.db = new Map();
    }
    save(key, value) {
        this.db.set(key, value);
    }
}
class PersistentDB {
    savePersistent(data) {
        console.log(data);
    }
}
class PersistentDBAdapter extends KVDataBase {
    constructor(dataBase) {
        super();
        this.dataBase = dataBase;
    }
    save(key, value) {
        this.dataBase.savePersistent({ key, value });
    }
}
function run(base) {
    base.save('key', 'myValue');
}
run(new PersistentDBAdapter(new PersistentDB));

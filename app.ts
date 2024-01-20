class KVDataBase {
    private db: Map<string, string> = new Map();
    save(key: string, value: string) {
        this.db.set(key, value);
    }
}

class PersistentDB {
    savePersistent(data: Object) {
        console.log(data);
    }
}

class PersistentDBAdapter extends KVDataBase {
    constructor (public dataBase: PersistentDB) {
        super();
    }

    override save(key: string, value: string): void {
        this.dataBase.savePersistent({key, value});
    }
}

function run(base: KVDataBase) {
    base.save('key', 'myValue');
}

run(new PersistentDBAdapter(new PersistentDB));
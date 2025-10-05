// Тут створюється клас UserService, якому неважливо яку саме базу даних використовувати,
// завдяки цьому нам непотрібно змінювати код всередині UserService, а просто потрібно підставити бажану базу даних

class Database {
    save(data) {}
}

class MySQLDatabase extends Database {
    save(data) {
        console.log("Зберігаю в MySQL:", data);
    }
}

class MongoDBDatabase extends Database {
    save(data) {
        console.log("Зберігаю в MongoDB:", data);
    }
}

class UserService {
    constructor(database) {
        this.db = database;
    }

    addUser(user) {
        this.db.save(user);
    }
}

const service1 = new UserService(new MySQLDatabase());
service1.addUser({ name: "Влад" });

const service2 = new UserService(new MongoDBDatabase());
service2.addUser({ name: "Андрій" });

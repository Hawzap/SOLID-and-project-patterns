// У цьому коді функціонал розбитий на класи, а саме: User та Project. Кожен з цих класів маю власні зобов'язання і не виконує нічого зайвого

class RestAPI {
    get() {
        console.log("Getting data from DB");
    }
    post() {
        console.log("Posting data to DB");
    }
    delete() {
        console.log("Deliting data from DB");
    }
    put() {
        console.log("Putting data to DB");
    }
}

class User {
    constructor(api) {
        this.api = api;
    }
    getUser() {
        // ...
    }
    getAllUsers() {
        // ...
    }
}

class Project {
    constructor(api) {
        this.api = api;
    }
    getProject() {
        // ...
    }
    getAllProjects() {
        // ...
    }
}

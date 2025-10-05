class OldAPI {
    requestData() {
        return { data: "Старий формат даних" };
    }
}

class NewAPI {
    getData() {
        throw new Error("Метод повинен бути реалізований у підкласі");
    }
}

class APIAdapter extends NewAPI {
    constructor(oldApi) {
        super();
        this.oldApi = oldApi;
    }

    getData() {
        const result = this.oldApi.requestData();
        return result.data.toUpperCase();
    }
}

const oldApi = new OldAPI();
const adapter = new APIAdapter(oldApi);

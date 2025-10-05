class Handler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class PositiveHandler extends Handler {
    handle(request) {
        if (request > 0) {
            console.log("PositiveHandler: оброблено позитивне число", request);
            return request;
        }
        return super.handle(request);
    }
}

class NegativeHandler extends Handler {
    handle(request) {
        if (request < 0) {
            console.log("NegativeHandler: оброблено негативне число", request);
            return request;
        }
        return super.handle(request);
    }
}

class ZeroHandler extends Handler {
    handle(request) {
        if (request === 0) {
            console.log("ZeroHandler: оброблено число 0");
            return request;
        }
        return super.handle(request);
    }
}

const positiveHandler = new PositiveHandler();
const negativeHandler = new NegativeHandler();
const zeroHandler = new ZeroHandler();

positiveHandler.setNext(negativeHandler).setNext(zeroHandler);

positiveHandler.handle(10); // PositiveHandler
positiveHandler.handle(-5); // NegativeHandler
positiveHandler.handle(0); // ZeroHandler
positiveHandler.handle(1000); // PositiveHandler

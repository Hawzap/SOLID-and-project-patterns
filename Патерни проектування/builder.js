// Клас продукту
class House {
    constructor() {
        this.walls = "";
        this.roof = "";
        this.windows = "";
    }

    describe() {
        return `Будинок з ${this.walls}, ${this.roof} і ${this.windows}.`;
    }
}

class HouseBuilder {
    setWalls() {}
    setRoof() {}
    setWindows() {}
    build() {}
}

class WoodenHouseBuilder extends HouseBuilder {
    constructor() {
        super();
        this.house = new House();
    }

    setWalls() {
        this.house.walls = "дерев'яними стінами";
        return this;
    }

    setRoof() {
        this.house.roof = "солом’яним дахом";
        return this;
    }

    setWindows() {
        this.house.windows = "дерев'яними вікнами";
        return this;
    }

    build() {
        return this.house;
    }
}

class BrickHouseBuilder extends HouseBuilder {
    constructor() {
        super();
        this.house = new House();
    }

    setWalls() {
        this.house.walls = "цегляними стінами";
        return this;
    }

    setRoof() {
        this.house.roof = "черепичним дахом";
        return this;
    }

    setWindows() {
        this.house.windows = "скляними вікнами";
        return this;
    }

    build() {
        return this.house;
    }
}

class Director {
    construct(builder) {
        return builder.setWalls().setRoof().setWindows().build();
    }
}

const director = new Director();

const woodenHouse = director.construct(new WoodenHouseBuilder());

const brickHouse = director.construct(new BrickHouseBuilder());

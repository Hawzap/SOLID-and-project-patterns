class TreeType {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    draw(x, y) {
        console.log(`${this.name} (${this.color}) на позиції ${x}, ${y}`);
    }
}

class TreeFactory {
    constructor() {
        this.types = {};
    }

    getType(name, color) {
        const key = name + color;
        if (!this.types[key]) {
            this.types[key] = new TreeType(name, color);
        }
        return this.types[key];
    }
}

class Tree {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    draw() {
        this.type.draw(this.x, this.y);
    }
}

const factory = new TreeFactory();

const forest = [
    new Tree(1, 2, factory.getType("Дуб", "зелений")),
    new Tree(5, 7, factory.getType("Дуб", "зелений")),
    new Tree(3, 4, factory.getType("Сосна", "темно-зелений")),
];

forest.forEach((tree) => tree.draw());

class Graphic {
    draw() {
        throw new Error("Метод draw() повинен бути реалізований у підкласі");
    }
}

class Circle extends Graphic {
    draw() {
        console.log("Малюю коло");
    }
}

class Square extends Graphic {
    draw() {
        console.log("Малюю квадрат");
    }
}

class CompoundGraphic extends Graphic {
    constructor() {
        super();
        this.children = [];
    }

    add(child) {
        this.children.push(child);
    }

    remove(child) {
        this.children = this.children.filter((c) => c !== child);
    }

    draw() {
        console.log("Малюю складну фігуру:");
        this.children.forEach((child) => child.draw());
    }
}

// --- Використання ---
const circle1 = new Circle();
const circle2 = new Circle();
const square = new Square();

const compound = new CompoundGraphic();
compound.add(circle1);
compound.add(square);

const bigCompound = new CompoundGraphic();
bigCompound.add(compound);
bigCompound.add(circle2);

bigCompound.draw();
// Вивід:
// Малюю складну фігуру:
//   Малюю складну фігуру:
//     Малюю коло
//     Малюю квадрат
//   Малюю коло

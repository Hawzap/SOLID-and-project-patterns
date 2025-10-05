class RealImage {
    constructor(filename) {
        this.filename = filename;
        this.loadFromDisk();
    }

    loadFromDisk() {
        console.log(`Завантажую ${this.filename} з диску...`);
    }

    display() {
        console.log(`Показую ${this.filename}`);
    }
}

class ProxyImage {
    constructor(filename) {
        this.filename = filename;
        this.realImage = null;
    }

    display() {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

const image1 = new ProxyImage("photo1.jpg");
const image2 = new ProxyImage("photo2.jpg");

image1.display(); // Завантажує і показує
image1.display(); // Лише показує (без завантаження)

image2.display(); // Завантажує і показує

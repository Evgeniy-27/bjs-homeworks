const divideError = new Error('Невалидное значение');

function parseCount(quantity) {
    const parsed = Number.parseInt(quantity, 10)
    if (isNaN(parsed)) {
        throw divideError;
    }
    //console.log(parsed)
    return parsed;
}

function validateCount(quantity) {
    try {
        return parseCount(quantity);
    } catch (err) {
        return divideError;
    }
}

//Задача 2 Треугольник

const triangleErr = new Error('Треугольник с такими сторонами не существует');

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (this.a + this.b < this.c || this.a > this.b + this.c || this.a + this.c < this.b) {
            throw triangleErr;
        }
    }

    getPerimeter() {
        let perimeter = this.a + this.b + this.c;

        return perimeter;
    }

    getArea() {
        let halfMeter = this.getPerimeter() / 2;
        let area = Math.sqrt(halfMeter * (halfMeter - this.a) * (halfMeter - this.b) * (halfMeter - this.c));

        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        const triangle = new Triangle(a, b, c);
        return triangle;
    } catch (error) {
        let object = {};
        object.getPerimeter = object.getArea = () => 'Ошибка! Неправильный треугольник';
        return object;
    }
}
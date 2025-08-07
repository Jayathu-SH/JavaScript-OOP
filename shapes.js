class Shape{
    getArea(){
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
    }

    getArea(){
        return Math.PI*this.radius*this.radius;
    }
}

class Rectangle extends Shape{
    constructor(width,height){
        super();
        this.width=width;
        this.height=height;
    }

    getArea(){
        return this.width*this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10,4);

console.log("Circle Area:", circle.getArea());
console.log("Rectangle Area:", rectangle.getArea());
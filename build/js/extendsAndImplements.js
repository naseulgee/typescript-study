"use strict";
class Car {
    constructor() {
        this.price = 1000;
        this.color = "white";
    }
    drive() {
        return "drive!";
    }
    brake() {
        return "brake!";
    }
}
class Ford extends Car {
}
const myCar = new Ford();
myCar.drive();
class Kia {
    constructor() {
        this.price = 2000;
        this.color = "black";
        this.seats = 5;
        this.tire = 4;
    }
    drive() {
        return "drive!";
    }
    brake() {
        return "brake!";
    }
}

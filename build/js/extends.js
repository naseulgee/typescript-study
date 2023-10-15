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

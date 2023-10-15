//Extends
class Car{
    price:number = 1000
    color:string = "white"
    drive(): string {
        return "drive!"
    }
    brake(): string {
        return "brake!"
    }
}
interface Part{
    seats: number
    tire: number
}
class Ford extends Car{}

const myCar = new Ford()
myCar.drive()

//Implements
class Kia implements Car, Part{
    price:number = 2000
    color:string = "black"
    seats: number = 5
    tire: number = 4
    drive(): string {
        return "drive!"
    }
    brake(): string {
        return "brake!"
    }
}
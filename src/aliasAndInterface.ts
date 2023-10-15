//Alias
type tyAnimal = {
    name : string
}
// type tyAnimal = { // Error -> 병합 불가
//     age: number
// }
type tyBear = tyAnimal & {//하위 타입
    honey: boolean
}
class HotBear implements tyBear{//타입 구현
    public name = "bear"
    public honey= true
}
const bear1: tyBear = {//타입 사용
    name : "bear",
    honey: true
}
//Union
type tyPlant = {
    water: boolean
}
type tyLife = tyAnimal | tyPlant
const life1: tyLife = {
    name: "butterfly",
    water: true
}

//Interface
interface inAnimal {
    name : string
}
interface inAnimal {//병합 -> inAnimal: {name : string, age : number}
    age  : number
}
interface inBear extends inAnimal {//하위 인터페이스 -> {name : string, age : number, honey: boolean}
    honey: boolean
}
class IceBear implements inBear{//인터페이스 구현
    public name = "bear"
    public age  = 1
    public honey= true
}
const bear2: inBear = {//인터페이스 사용
    name : "bear",
    age  : 1,
    honey: true
}
//Union
type inPlant = {
    water: boolean
}
type inLife = inAnimal | inPlant
const life2: inLife = {
    name : "butterfly",
    age  : 0.6,
    water: true
}
const numArr = [1, 2, 3]
const strArr = ["a", "b", "c"]
const booArr = [true, false]

//Union을 이용한 방식
function getUnArrayLength(arr: number[] | string[] | boolean[]): number{
    return arr.length
}
getUnArrayLength(numArr)
getUnArrayLength(strArr)
getUnArrayLength(booArr)

//Generic을 이용한 방식
function getArrayLength<T>(arr: T[]): number{
    return arr.length
}
getArrayLength<number>(numArr)
getArrayLength<string>(strArr)
getArrayLength<boolean>(booArr)

//any를 이용한 방식
interface AnyVehicle{
    name: string
    color: string
    option: any
}
const anycar:AnyVehicle = {
    name: "Car",
    color: "red",
    option: {
        price: 1000
    },
}
const anybike:AnyVehicle = {
    name: "Bike",
    color: "green",
    option: true,
}

//Generic을 이용한 방식
interface GenVehicle<T>{
    name: string
    color: string
    option: T
}
const gencar:GenVehicle<{price: number}> = {
    name: "Car",
    color: "red",
    option: {
        price: 1000
    },
}
const genbike:GenVehicle<boolean> = {
    name: "Bike",
    color: "green",
    option: true,
}

//두 개 이상의 제네릭
const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
    return [x, y]
}
const makeNumArr = makeArr<number, number>(4, 5)
const makeStrArr = makeArr<string, string>("a", "b")

//제약
const makeUserInfo = <T extends {firstName: string, lastName: string}, U extends keyof T>(obj: T, key: U) => {
    return {
        ...obj,//obj 객체 복사
        fullName: obj.firstName + " " + obj.lastName,
        key: key
    }
}
makeUserInfo({firstName: "John", lastName: "Kim", age: 18}, "age")
// makeUserInfo({firstName: "John", age: 18}, "age")                    // Error -> lastName 없음
// makeUserInfo({firstName: "John", lastName: "Kim", age: 18}, "place") // Error -> keyof 미충족
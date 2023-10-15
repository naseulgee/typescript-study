let boolean: boolean
let falseBoolean: boolean = false

let number: number
let integer: number = 6
let float: number = 1.234

let string: string
let firstName: string = "Doe"

//Any: 여러 타입을 사용
let something: any = true
something = "a"
something = 1
let someArray: any[] = ["John", 1, 3, {}, [], false]

//Unknown: 재할당 불가의 여러 타입을 사용
let unknown: unknown = "GUEST"
//let person: string = unknown //Error
let person: string = unknown as string

//Array: 한가지 타입의 배열
let names1: string[] = ["John", "Kim"]
let names2: Array<string> = ["John", "Kim"]

//Union: 여러 타입의 배열
let array1: (string | number)[] = ["John", 1, 3]
let array2: Array<string | number> = ["John", 1, 3]

//읽기 전용 배열(readonly, ReadonlyArray, ReadonlyMap, ReadonlySet)
let stringArray: readonly string[] = ["John", "Kim"]
let numberArray: ReadonlyArray<number> = [1, 2, 3]
//stringArray.push("C") //Error
//numberArray[0] = 3    //Error

//Tuple: 고정된 길이와 타입의 배열
let tuple1: [string, number]
tuple1 = ["a", 1]
//tuple1 = ["a", 1, 2] //Error
//tuple1 = [a, "a"]    //Error
tuple1.push(2)

//n차 배열
let users: [number, string][]
users = [[1, "John"], [2, "Ann"]]
let triple: [number, string][][]
triple = [[[1, "John"], [2, "Ann"]], [[3, "Tom"], [4, "Kim"]]]

//객체
let obj: object = {}
let arr: object = []
//let nul: object = null //Error(tsconfig의 strict 설정 시에만)
let date: object = new Date()
const obj1: object = {
    id: 1,
    title: "Hi"
}
const obj2: {id: number, title: string} = {
    id: 1,
    title: "Hi"
}

//함수
//let func1 //Error
let func1: (arg1: number, arg2: number) => number
func1 = function(x, y){
    return x * y
}
let func2: () => void
func2 = function(){
    console.log("hi");
}

//Null, Undefined -> tsconfig의 strictNullChecks 설정 시 다른 타입에 할당 불가
let nullVoid2: void = undefined//유일하게 가능
// let nullNumber: number = null                    //Error
// let nullString: string = undefined               //Error
// let nullObj: {a: number, b: boolean} = undefined //Error
// let nullArray: any[] = null                      //Error
// let nullVoid: void = null                        //Error

//Void
// function greeting(): undefined{ //Error
function greeting(): void{
    console.log("hi")
}
greeting()//undefined 출력

//Never
function throwErr(): never{
    throw new Error("err");
}
function loop(): never{
    while (true) {
        console.log("loop")
    }
}
let never: never[] = []
//never.push(1) //Error
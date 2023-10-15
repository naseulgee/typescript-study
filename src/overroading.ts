//함수 선언
function add(a: string, b: string): string
function add(a: number): number
function add(a: number, b: number): number
function add(a: number, b?: number, c?: number): number
//함수 구현
function add(a: any, b?: any, c?: any): any{
    //선택적 프로퍼티(?:) -> 앞의 대상이 있을수도, 없을수도 있음
    if(typeof a === "number"){
        return a + (b ?? 0) + (c ?? 0)
        //Null 병합 연산자(??) -> 앞의 대상의 값이 null 또는 undefined인 경우 뒤의 값으로 대처
    }
    return a + b;
}
//함수 호출
console.log(add("Hello, ", "World"))// Hello, World
console.log(add(1))                 // 1
console.log(add(1, 2))              // 3
console.log(add(1, 2, 3))           // 6

//Union을 이용한 방식
// function saySomthing(word: string | string[]): string{
//     if(typeof word === "string") return word
//     if(Array.isArray(word)) return word.join("")
//     throw new Error("unable to say somthing")
// }

//오버로딩을 이용한 방식
function saySomthing(word: string): string
function saySomthing(word: string[]): string
function saySomthing(word: any): any{
    if(typeof word === "string") return word
    if(Array.isArray(word)) return word.join("")
    throw new Error("unable to say somthing")
}
console.log(saySomthing("Hello, World"))      // Hello, World
console.log(saySomthing(["Hello, ", "World"]))// Hello, World
//console.log(saySomthing(1))// Error
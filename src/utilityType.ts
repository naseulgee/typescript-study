//Partial
interface Addr{
    email: string
    address: string
}

// const me: Addr = {}                        // Error
// const you: Addr = {email: "test@gmail.com"}// Error
const me: Partial<Addr> = {}
const you: Partial<Addr> = {email: "test@gmail.com"}
const all: Addr = {email: "test@gmail.com", address: "Korea"}

//Pick
interface Todo{
    title: string
    desc: string
    completed: boolean
}

const parTodo: Partial<Todo> = {
    title: "Clean Room",
    completed: false
}
const pikTodo: Pick<Todo, "title" | "completed"> = {
    title: "Clean Room",
    completed: false
}

//Omit
const omiTodo: Omit<Todo, "completed"> = {
    title: "Clean Room",
    desc: "very hard"
}

//Exclude
type fruit = "🍋" | "🍊" | "🍈"

let lemon: fruit = "🍋"
let noLemon: Exclude<fruit, "fruit"> = "🍊"
let noLemonOrOrange: Exclude<fruit, "🍋" | "🍊"> = "🍈"

//Required
type UserInfo = {
    firstName: string,
    lastName?: string//선택사항
}
let user1: UserInfo = {
    firstName: "Ann"
}
let user2: Required<UserInfo> = {
    firstName: "John",
    lastName: "Kim"//무조건 필수
}

//Record
interface CatInfo{
    age: number
    breed: string
}
type CatName = "miffy" | "boris" | "mordred"

const cats: Record<CatName, CatInfo> = {
    "miffy"  : {age: 10, breed: "Kim"},
    "boris"  : {age: 5, breed: "Lee"},
    "mordred": {age: 2, breed: "Park"},
}

//ReturnType
type T0 = ReturnType<() => string>//string
type T1 = ReturnType<(str: string) => void>//void

function fn(str: string){
    return str;
}
const aT0: ReturnType<typeof fn> = "Hello"
// const bT0: ReturnType<typeof fn> = true//Error

//Readonly
interface OptionalUserInfo{
    name?: string
    age? : number
    phone: number
}
type ReadonlyUserInfo = Readonly<OptionalUserInfo>
const user: ReadonlyUserInfo = {
    name : "Kim",
    age  : 23,
    phone: 111
}
//user.age = 11;//Error

//NonNullable
type NullTy = string | number | null
type UndeTy = number | undefined

type NonNullTy = NonNullable<NullTy>//string | number
type NonUndeTy = NonNullable<UndeTy>//number
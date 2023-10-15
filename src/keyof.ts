interface IUser{
    name: string
    age: number
    address: string
}
type UserKeys = keyof IUser//"name" | "age" | "address"

const objUser = {
    name: "John",
    age: 20,
    address: "Korea"
}
type ObjUserKeys = keyof typeof objUser//"name" | "age" | "address"

enum UserRole{
    admin,
    manager,
    user,
    geust
}
type UserRoleKeys = keyof typeof UserRole//"admin", "manager", "user", "geust"
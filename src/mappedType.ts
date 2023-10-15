//Union의 타입 변환
type Users = "John" | "Han" | "Kim"
type UserFirstName = {
    //Users에 있는 속성의 타입을 string으로 변환
    [K in Users]: string
    //John: string
    //Han: string
    //Kim: string
}
const userFirstNameInfo: UserFirstName = {
    John: "Deo",
    Han: "Ho",
    Kim: "jun"
}

type UserAge = {[K in Users]: number}
const userAgeInfo: UserAge = {
    John: 10,
    Han: 15,
    Kim: 7
}

//객체의 타입 변환
type DeviceFormatter<T> = {
    [K in keyof T]: T[K]
    //keyof -> 객체의 키들을 튜플로 반환
    //[K in [manufacturer | price]]: Device[K]
    //manufacturer: string
    //price: number
}
type Device = {
    manufacturer: string
    price: number
}
const iphon: DeviceFormatter<Device> = {
    manufacturer: "apple",
    price: 100
}

//optional 변환
type OptionalDeviceFormatter<T> = {
    [K in keyof T]?: T[K]
}
const manufacturerOnly: OptionalDeviceFormatter<Device> = {manufacturer: "apple"}
const empty: OptionalDeviceFormatter<Device> = {}

//readonly 변환
type ReadonlyDeviceFormatter<T> = {
    readonly [K in keyof T]: T[K]
}
const readonlyDevice: ReadonlyDeviceFormatter<Device> = {
    manufacturer: "apple",
    price: 100
}
iphon.manufacturer = "galaxy"//OK
// readonlyDevice.manufacturer = "galaxy"//Error
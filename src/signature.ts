//Call-signature
interface getLikeNumber{
    (like: number): number//함수의 매개변수 타입과 리턴 타입 지정
}
interface Post{
    id: number,
    title: string,
    getLikeNumber: getLikeNumber
}
const post1: Post = {
    id: 1,
    title: "post 1",
    getLikeNumber(like:number){ return like }
}

//Index-signature
//객체 인덱스 시그니처
interface Post{
    [key: string]: unknown//나중에 추가할 내용의 키와 값의 타입 명시
}
post1["description"] = "description 1"
post1["pages"] = 300
//배열 인덱스 시그니처
interface Names{
    [items: number]: string
}
const userNames: Names = ["John", "kim", "Joe"]
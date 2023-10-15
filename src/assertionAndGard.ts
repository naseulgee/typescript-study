//const bodyEl1 = document.querySelector("body") //HTMLBodyElement | null
//bodyEl1.innerText = "Hello" //Error -> null일수도 있어서

//타입 단언
const bodyEl2 = document.querySelector("body") as HTMLBodyElement
bodyEl2.innerText = "Hello"

//undefined 또는 null이 아님을 단언
const bodyEl3 = document.querySelector("body")
bodyEl3!.innerText = "Hello"

//타입 가드
const bodyEl4 = document.querySelector("body")
if(bodyEl4){
    bodyEl4.innerText = "Hello"
}
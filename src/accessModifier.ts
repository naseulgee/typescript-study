//객체 선언
class AccessPost{
    //지역변수 선언 및 초기화
    //public -> 생략 가능. 어디서나 접근 가능
    id: number = 0
    public title: string = ""
    //protected -> 해당 클래스 내부 또는 자식 클래스 내부에서만 접근 가능
    protected prevId: number = -1
    protected prevTitle: string = "before"
    //private -> 해당 클래스 내부에서만 접근 가능
    private nextId: number = 1
    private nextTitle: string = "next"

    //생성자
    constructor(id: number, title: string){
        this.id = id
        this.title = title
        this.prevId = id - 1
        this.prevTitle = title + " before"
        this.nextId = id + 1
        this.nextTitle = title + " next"
    }

    getPost(): string{
        return `
        postId: ${this.id}, postTitle: ${this.title}. 
        prevId: ${this.prevId}, prevTitle: ${this.prevTitle}. 
        nextId: ${this.nextId}, nextTitle: ${this.nextTitle}.
        `
    }
}

//객체 생성
let pubPost: AccessPost = new AccessPost(1, "title 1")
console.log(pubPost.id, pubPost.title) //1, title 1
//console.log(pubPost.prevId, pubPost.prevTitle, pubPost.nextId, pubPost.nextTitle)// Error
console.log(pubPost.getPost())

//자식 클래스에서 접근
class ProPost extends AccessPost{
    getPost(): string {
        return `
        postId: ${this.id}, postTitle: ${this.title}. 
        prevId: ${this.prevId}, prevTitle: ${this.prevTitle}. 
        `
        //nextId: ${this.nextId}, nextTitle: ${this.nextTitle}. // Error
    }
}
let proPost: ProPost = new ProPost(1, "title 1")
console.log(proPost.id, proPost.title) //1, title 1
console.log(proPost.getPost())

//생성자에서의 지역변수 선언 및 초기화
class SetInCon{
    //생성자
    constructor(
        public id: number,//public 생략 불가
        protected title: string = "",
        private name: string =  ""
    ){
        //this.id = id // -> 생략
    }

    getPost(): string{
        return `postId: ${this.id}, postTitle: ${this.title}, creator: ${this.name}.`
    }
}
let setInCon: SetInCon = new SetInCon(1, "title 1", "John")
console.log(setInCon.id) //1
console.log(setInCon.getPost())
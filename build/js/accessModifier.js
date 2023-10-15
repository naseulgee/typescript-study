"use strict";
class AccessPost {
    constructor(id, title) {
        this.id = 0;
        this.title = "";
        this.prevId = -1;
        this.prevTitle = "before";
        this.nextId = 1;
        this.nextTitle = "next";
        this.id = id;
        this.title = title;
        this.prevId = id - 1;
        this.prevTitle = title + " before";
        this.nextId = id + 1;
        this.nextTitle = title + " next";
    }
    getPost() {
        return `
        postId: ${this.id}, postTitle: ${this.title}. 
        prevId: ${this.prevId}, prevTitle: ${this.prevTitle}. 
        nextId: ${this.nextId}, nextTitle: ${this.nextTitle}.
        `;
    }
}
let pubPost = new AccessPost(1, "title 1");
console.log(pubPost.id, pubPost.title);
console.log(pubPost.getPost());
class ProPost extends AccessPost {
    getPost() {
        return `
        postId: ${this.id}, postTitle: ${this.title}. 
        prevId: ${this.prevId}, prevTitle: ${this.prevTitle}. 
        `;
    }
}
let proPost = new ProPost(1, "title 1");
console.log(proPost.id, proPost.title);
console.log(proPost.getPost());
class SetInCon {
    constructor(id, title = "", name = "") {
        this.id = id;
        this.title = title;
        this.name = name;
    }
    getPost() {
        return `postId: ${this.id}, postTitle: ${this.title}, creator: ${this.name}.`;
    }
}
let setInCon = new SetInCon(1, "title 1", "John");
console.log(setInCon.id);
console.log(setInCon.getPost());

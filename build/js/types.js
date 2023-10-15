"use strict";
let boolean;
let falseBoolean = false;
let number;
let integer = 6;
let float = 1.234;
let string;
let firstName = "Doe";
let something = true;
something = "a";
something = 1;
let someArray = ["John", 1, 3, {}, [], false];
let unknown = "GUEST";
let person = unknown;
let names1 = ["John", "Kim"];
let names2 = ["John", "Kim"];
let array1 = ["John", 1, 3];
let array2 = ["John", 1, 3];
let stringArray = ["John", "Kim"];
let numberArray = [1, 2, 3];
let tuple1;
tuple1 = ["a", 1];
tuple1.push(2);
let users;
users = [[1, "John"], [2, "Ann"]];
let triple;
triple = [[[1, "John"], [2, "Ann"]], [[3, "Tom"], [4, "Kim"]]];
let obj = {};
let arr = [];
let date = new Date();
const obj1 = {
    id: 1,
    title: "Hi"
};
const obj2 = {
    id: 1,
    title: "Hi"
};
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log("hi");
};
let nullVoid2 = undefined;
function greeting() {
    console.log("hi");
}
greeting();
function throwErr() {
    throw new Error("err");
}
function loop() {
    while (true) {
        console.log("loop");
    }
}
let never = [];

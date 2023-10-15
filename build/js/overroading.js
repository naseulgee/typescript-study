"use strict";
function add(a, b, c) {
    if (typeof a === "number") {
        return a + (b !== null && b !== void 0 ? b : 0) + (c !== null && c !== void 0 ? c : 0);
    }
    return a + b;
}
console.log(add("Hello, ", "World"));
console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));
function saySomthing(word) {
    if (typeof word === "string")
        return word;
    if (Array.isArray(word))
        return word.join("");
    throw new Error("unable to say somthing");
}
console.log(saySomthing("Hello, World"));
console.log(saySomthing(["Hello, ", "World"]));

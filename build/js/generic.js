"use strict";
const numArr = [1, 2, 3];
const strArr = ["a", "b", "c"];
const booArr = [true, false];
function getUnArrayLength(arr) {
    return arr.length;
}
getUnArrayLength(numArr);
getUnArrayLength(strArr);
getUnArrayLength(booArr);
function getArrayLength(arr) {
    return arr.length;
}
getArrayLength(numArr);
getArrayLength(strArr);
getArrayLength(booArr);
const anycar = {
    name: "Car",
    color: "red",
    option: {
        price: 1000
    },
};
const anybike = {
    name: "Bike",
    color: "green",
    option: true,
};
const gencar = {
    name: "Car",
    color: "red",
    option: {
        price: 1000
    },
};
const genbike = {
    name: "Bike",
    color: "green",
    option: true,
};
const makeArr = (x, y) => {
    return [x, y];
};
const makeNumArr = makeArr(4, 5);
const makeStrArr = makeArr("a", "b");
const makeUserInfo = (obj, key) => {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName, key: key });
};
makeUserInfo({ firstName: "John", lastName: "Kim", age: 18 }, "age");

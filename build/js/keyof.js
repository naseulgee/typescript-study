"use strict";
const objUser = {
    name: "John",
    age: 20,
    address: "Korea"
};
var UserRole;
(function (UserRole) {
    UserRole[UserRole["admin"] = 0] = "admin";
    UserRole[UserRole["manager"] = 1] = "manager";
    UserRole[UserRole["user"] = 2] = "user";
    UserRole[UserRole["geust"] = 3] = "geust";
})(UserRole || (UserRole = {}));

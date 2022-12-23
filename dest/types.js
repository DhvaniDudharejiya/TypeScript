"use strict";
let n1 = 10;
let n2 = 20;
let n3;
n2 = 30;
// primitive types
let a1 = 10; // number
let b1 = true; // boolean
let s = 'India'; // string
const pi = 3.142; //const number
let t = 5; // here 5 is a type. TS will not allow us to set any other value than 5
// Array type
let students = ['Shubham', 'Jitesh', 'Mansi', 'Anuja'];
console.log(students);
let students2 = ['Shubham', 'Jitesh', 'Mansi', 'Anuja'];
console.log(students2);
// Tuple
let emp = [101, 'Tushar'];
console.log(emp);
let s1 = {
    name: 'Virat',
    city: 'Delhi'
};
console.log(s1);
console.log(s1.name);
let s2 = { name: 'Rohit', city: 'Mumbai' };
console.log(s2);
console.log(s2.city);
// Any type
let m = 'Welcome';
console.log(m);
m = 101;
console.log(m);
// enum type
var days;
(function (days) {
    days[days["mon"] = 0] = "mon";
    days[days["tue"] = 1] = "tue";
    days[days["wed"] = 2] = "wed";
    days[days["thu"] = 3] = "thu";
    days[days["fri"] = 4] = "fri";
    days[days["sat"] = 5] = "sat";
    days[days["sun"] = 6] = "sun";
})(days || (days = {})); // default value starts from zero and is increment by 1
console.log(days.mon);
var colors;
(function (colors) {
    colors[colors["black"] = 100] = "black";
    colors[colors["blue"] = 101] = "blue";
    colors[colors["red"] = 102] = "red";
    colors[colors["green"] = 200] = "green";
    colors[colors["white"] = 201] = "white";
    colors[colors["orange"] = 202] = "orange";
})(colors || (colors = {}));
console.log(colors.black);
var roles;
(function (roles) {
    roles[roles["manager"] = 501] = "manager";
    roles[roles["admin"] = 555] = "admin";
    roles[roles["user"] = 502] = "user";
})(roles || (roles = {}));
console.log(roles.admin);
console.log(roles.manager);
console.log(roles.user);
// Union type
let p = 'Hello';
console.log(p);
p = 107;
console.log(p);
p = true;
console.log(p);

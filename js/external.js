"use strict";

//... rest of javascript code

console.log('Hello from JavaScript!');

alert("Welcome to my website!");


var color;

color = prompt("What is your favorite color");
var message;
message = "Great, " + color + " is my favorite color too!"
alert(message);

var mermaid = 3
var BrotherBear = 5
var Hercules = 1

mermaid + BrotherBear + Hercules * 3;

alert("The price of the movies is $27")

var Google = 400
var Amazon = 380
var Facebook = 350

Facebook * 10 + Google * 6 + Amazon * 4
alert("$7420")

var full = confirm ("Is the class full");
var conflict = confirm("Is there a conflict");
alert("You can enroll in the class:" + (!full && !conflict));

var userResponse = prompt(message: "Are you a premium member?" Yes or No");
var items = Number (prompt(message: "How many items did you buy?"));
var expired = confirm("Is the coupon expired");
alert("You can get the discount" + ((!expired) && (premium || (quantity > 2 ))));


var username = 'codeup';
var password = 'notastrongpassword';
var password_is_five_characters = passwords.length >= 5;
var password_doesnt_contain_username = password.includes(username);
var username_less_than_20_characters = username.length < 20;
var contains_no_whitespace; password === password.trim() && username === username.trim();

console.log(password_is_five_characters);
console.log(password_doesnt_contain_username);
console.log(username_less_than_20_characters);
console.log(contains_no_whitespace);
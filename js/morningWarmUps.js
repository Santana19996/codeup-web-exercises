// TODO: Create a function named countSpaces that accepts a
//  string and returns the total number of spaces in the string.

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex= /[a-z]/ig
// let result = quoteSample.match(alphabetRegex)
// i igngores, the g finds every chracter of it

function countSpaces(x){
   return x.match(/([\s]+)/g).length // this was on stack overflow
                                       //This actually makes more sense to me
//g will find every occurence          //compared to a for loop solution

   //match returns the mathces obviously
   //s matches a single white space character
       //we know what .length does
   // this is the syntax of regex expressions like my other excercises
     //  /([\s]+)/
   //+ is like a & similar to what i did in my practice
   // it matches character before + one or more times

}



// TODO: Add validation to function above,
//  if the argument pass is not a string it should return false.
console.log(countSpaces("4 4 4 4 4 4"))






// July 6th 2021
// TODO: Create a function named capitalizeAllNames
//  that accepts an array of strings and
//  returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"])
// ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
let list = ["bob", "Seth", "TOFU", "Toyota"];

function capitalizeAllNames (x){
   return (list.map(a => a.toUpperCase()))
}
console.log(capitalizeAllNames())
//This morning I had something completely different
//take time and relax and it makes more sense
//
// function lower (x){
//    return (list.map(a => a.toLowerCase()))
//}
// TODO: Create a function named capitalizeFirstLetter
//  that accepts an array of strings and
//  returns the array with all of the first letters in
//  each string being capitalized
//  while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"])
// ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
// let list2 = ["bob","Seth","TOFU","Toyota"]
// function capitalizeFirstLetter (i){
//    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
//    }
// console.log(capitalizeFirstLetter)
//Cant get this one right...Figure it out on the weekend..

//Wednesday, July 7, 2021 at 9:03:46 AM
// July 7th 2021
//cre
// TODO: Create a method on the object down below named getFullName
//  that when called returns the users full name using the "this" key term.

// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
var personOne = {
   firstName: "silvia",
   lastName: "floopertan",
   ageInYears: 34,
   heightInInches: 65,
   getFullName: function() {
      return this.firstName + "" + this.lastName
   }
}
console.log(personOne)

//didnt even get passed this one
//

// TODO: Create a method on the object down below named getNicelyFormattedFullName
//  that when called returns the
//  users full name with both first letters in the names being capitalized
//  look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
   firstName: "dan",
   lastName: "valdarez",
   ageInYears: 61,
   heightInInches: 73
}
// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ---->
// "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
   firstName: "arlene",
   lastName: "martinez",
   ageInYears: 25,
   heightInInches: 62
}



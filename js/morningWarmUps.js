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
list = list.map(function(x){
   return x.toUpperCase()
})




// TODO: Create a function named capitalizeFirstLetter
//  that accepts an array of strings and
//  returns the array with all of the first letters in
//  each string being capitalized
//  while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"])
// ---- returns ----> ["Bob","Seth","Tofu","Toyota"]

let list2 = ["bob","Seth","TOFU","Toyota"]
let captilizeFirstLetter =/[]/
    let resultofregex =
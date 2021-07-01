// TODO: Create a function named countSpaces that accepts a
//  string and returns the total number of spaces in the string.

function countSpaces(x){
   return x.match(/([\s]+)/g).length
//g will find every occurence
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
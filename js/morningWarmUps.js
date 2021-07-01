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
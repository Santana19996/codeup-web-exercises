(function(){
    "use strict";

    /**
     *
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var log = console.log
var names = ['Vivian', 'Sergio', 'Eric', 'Selena']

    /**
     *
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names)
    /**
     *
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(...names)
    /**
     *
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("All names");
    for (let number =0; number < names.length; number++) {
        console.log(names[number]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach(element => console.log(element));
//This above me also works, => is a arrow function(need to understand it)
  //  names.forEach(function(element) {
    //    console.log(element);
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */



function first(array) {
    return array[1]
}
function second(array) {
    return array[3];
}
function last(array) {
    return array[array.length -2];
}

console.log(first(names));
console.log(second(names));
console.log(last(names));

})();
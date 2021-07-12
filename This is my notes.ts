The .map() method applies a function to every element in an array. A new array is then returned. In other words, .map() takes an array, does something to every element in the array and returns a new array.
Let's say we have an array of numbers:

const numbers = [1, 4, 9, 16]
To multiply every element in the numbers array by 2, we do this:
numbers.map(x => x * 2)





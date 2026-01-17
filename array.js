// ==== JS - Data Manipulation ====

// === Array ===

const fruits = ["Apple", "Banana", "Orange", "Mango"];

// a. length, push, pop, shift, unshift, toString, join, [], splice, indexOf, slice, split ,includes

// arrayName.length
// console.log(fruits.length);

// [indexNo.]
// const value = fruits[1];

// Adding data using indexNo.
// fruits[2] = "Watermelon";

// === Adding data in the array

// arrayName.push() // adds data in the last index
// fruits.push("Grapes");

// arrayName.unshift() // adds data in the first index
// fruits.unshift("Grapes");

// arrayName.splice(indexNo, no. to delete, value) // adds data to the specified index
// fruits.splice(2, 0, "Grapes");

// === Deleting data in the array

// arrayName.pop() // removes last data from the array
// fruits.pop();

// arrayName.shift() // removes first data from the array
// fruits.shift();

// arrayName.splice(indexNo., items to remove)
// const val = fruits.splice(2, 2);

//arrayName.slice(start-indexNo, endindexNo) // extracts data from the array and stores it in a new array
// const val = fruits.slice(2, 4);

// arrayName.toString() // converts array to string
// const val = fruits.toString();

// const val = arrayName.toString().split(seperator); // converts array to string and back to array
// const val = fruits.toString().split();

// arrayName.indexOf(data) // finds index no. of the data
// const val = fruits.indexOf("Banana");

// arrayName.includes(data) // finds if the data is included or not
// const val = fruits.includes("Apple");

// arrayName.join(seperator) // converts the array to string
// const val = fruits.join();

// b. sort, reverse

// arrayName.sort() // sorts the array
// console.log(fruits.sort());

// arrayName.reverse() // reverses the array
// fruits.reverse();

// c. forEach, map

// d. filter, reduce, every, find

console.log(typeof fruits);
console.log(fruits);
console.log(val);

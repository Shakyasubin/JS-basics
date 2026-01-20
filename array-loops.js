// ==== JS - Array Loops ====

// === For / of (x of arrayName)

// for (let randomName of arrayName) {
// statement;
// }

// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log(fruits);

// const upperFruits = [];

// for (let item of fruits) {
//   upperFruits.push(item.toUpperCase());
// }
// console.log(upperFruits);

// ==================================================================

// === For

// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// ==================================================================

// === For Each

// arrayName.forEach(()=>{})

// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// fruits.forEach((fruit, index) => {
//   console.log(index, fruit);
// });

// ==================================================================

// === Map  // can be used to send existing datas to new array but might create empty memory block

// arrayName.Map((data, indexNo) => {statement; return})

// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// const newData = fruits.map((item, i) => {
//   if (item.includes("n")) {
//     return item;
//   }
// });

// console.log(newData);

// ==================================================================

// === Filter // can be used to send existing datas to new array without creating empty memory block

// arrayName.filter((data, indexNo) => {statement, return true;})

// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// const newData = fruits.filter((item, i) => {
//   if (item.includes("n")) {
//     return true;
//   }

// === Simplified Version

//   return item.includes("n");
// });

// === Shorthand

// const newData = fruits.filter((item, i) => item.includes("n"));

// console.log(newData);

// ==================================================================

// === Reduce // can be used for number calculation

// arrayName.reduce((accumulator, data) => {return}, accumulator-value)

// const money = [10, 345, 56, 3245, 5467, 3456, 435673];

// const total = money.reduce((acc, num) => {
//   return acc + num;
// }, 0);

// console.log(total);

// ==================================================================

// === Every

// arrayName.every((data)) => {return true}

// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// const result = fruits.every((item) => {
//   console.log(item);
//   return item.includes("a");
// });
// console.log(result);

// const money = [10, 345, 56, 3245, 5467, 3456, 435673];

// const result = money.every((num) => {
//   return num >= 10;
// });
// console.log(result);

// ==================================================================

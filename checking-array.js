// === Checking if required data exists inside array

// arrayName.includes()

// arrayName.find((data) => {return condition})
// arrayName.find(data) => codition;

// arrayName.indexOf()

// const money = [10, 345, 56, 3245, 5467, 3456, 435673];

// const result = money.includes(10);

// const result = money.find((item) => {
//   return item === 3245;
// });
// console.log(result)

// == Shorthand

// const result = money.find((item) => item === 3245);
// console.log(result);

// const result = money.indexOf(56);
// console.log(result);

// ==================================================================
// === Creating new array

// new Array(no. of data) // creates array with 10 memory blocks

// new Array(no.of data).fill(data) // fills the array with data provided

// const newAry = new Array(10).fill("i");
// console.log(newAry);

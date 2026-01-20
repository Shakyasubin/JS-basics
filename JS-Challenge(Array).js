//  [Challenge] Solve The Following Javascript Array problems

// ------------------------------------------------------

// Challange #1

// 1. create an array of 50 random numbers range between 1 and 100 programmatically

// let ranArray = [];

// for (let i = 1; i <= 50; i++) {
//   let tempArray = Math.ceil(Math.random() * 100);
//   if (tempArray < 100) {
//     ranArray.push(tempArray);
//   }
// }
// console.log(ranArray);

// Solution from Mentor

// const arg = [];

// for (let i = 0; i < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   arg[i] = num;
// }

// console.log(arg);

// ------------------------------------------------------

//2. sort the array in descending order

// let arrayB = ranArray.sort((a, b) => a - b);
// console.log(arrayB);

// Solution from Mentor

// arg.sort((a, b) => b - a);
// console.log(arg);

// ------------------------------------------------------

//3. get total of the array

// const total = arrayB.reduce((acc, num) => {
//   return acc + num;
// }, 0);
// console.log(total);

// Solution from Mentor

// const total = arg.reduce((acc, num) => acc + num, 0);
// console.log(total);

// ------------------------------------------------------

//4.Divide original array in to 2 new arrays that contains even or odd numbers only each.

// let evenArr = [];
// let oddArr = [];

// for (let i = 0; i < ranArray.length; i++) {
//   if (ranArray[i] % 2 === 0) {
//     evenArr.push(ranArray[i]);
//   } else {
//     oddArr.push(ranArray[i]);
//   }
// }

// console.log(evenArr);
// console.log(oddArr);

// Solution from Mentor

// const evenArg = arg.filter((item) => item % 2 === 0);
// const oddArg = arg.filter((item) => item % 2 !== 0);

// console.log(evenArg);
// console.log(oddArg);

// ------------------------------------------------------

// 5. remove duplicate number for the original array

// Solution from Mentor

// const uniqueArg = [];
// for (let i = 0; i < arg.length; i++) {
//   if (!uniqueArg.includes(arg[i])) {
//     uniqueArg.push(arg[i]);
//   }
// }
// console.log(uniqueArg);

// Easy way

// const uniqueArg = [...new Set(arg)]; // De-constructing Method
// console.log(uniqueArg);

// ------------------------------------------------------

// Challange #2

// create unique array 50 numbers range between 1 and 100 programmatically

// const ranArg = [];

// for (let i = 0; i < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   ranArg[i] = num;
//   if (!ranArg.includes(ranArg[i])) {
//     ranArg.push(ranArg[i]);
//   }
// }
// console.log(ranArg);

// // Solution from Mentor

// const uniqueArg = [];
// for (let i = 0; uniqueArg.length < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   if (!uniqueArg.includes(num)) {
//     uniqueArg.push(num);
//   }
// }
// console.log(uniqueArg);

// ------------------------------------------------------

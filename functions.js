// ==== JS - Functions ====

// === Classic Method ===

// === function name(args) {statement}

// function sayHi() {
//   const str = "Hello there!, This is Subin!";
//   console.log(str);
// }
//
// sayHi();

// =============================================

// Sending data to function

// function sayHi(name, add) {
//   const str = "Hello there! This is " + name + "! I live in " + add + "!."; // concatination
//   const str = `Hello there! This is ${name}!. I live in ${add}!.`; // template literal
//   console.log(str);
// }

// sayHi("Subin", "Nayabazar");

// =============================================

// === ES6 Method ===

// === (args) => {statement}

// const sayHi = (name, add) => {
//   const str = `Hello there! This is ${name}!. I live in ${add}!.`; // template literal
//   console.log(str);
// };

// sayHi("Subin", "Nayabazar");

// =============================================

// === Usage ===

// const userList = [
//   {
//     name: "Prem",
//     location: "Sydney",
//     career: "founder of DC",
//     interest: "loves coding and teaching",
//   },

//   { name: "Sam", location: "US", interest: "likes to sing" },

//   { name: "William" },
// ];

// const career = ({ career, interest }) => {
//   return `He is ${career} and ${interest}.`;
// };

// const personBio = ({ name, location = "N/A", ...rest }) => {
//   let str = `${name} is from ${location}.`;

//   if (rest.career) {
//     str += career(rest);
//   }

//   return str;
// };

// userList.forEach((item) => {
//   const data = personBio(item);
//   console.log(data);
// });

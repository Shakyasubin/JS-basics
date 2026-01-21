// ==== JS - Data Manipulation ====

// 1. {key:data}

// const person = {
//   name: "Subin Shakya",
//   phone: 1234567,
//   isMarried: true,
//   hasPet: undefined,
//   gender: null,
//   skills: ["HTML", "CSS", "JavaScript", ["Flexbox", "Grid System"]],
//   parents: {
//     f: "Shanta",
//     m: "Sulochana",
//   },
//   bio: () => {
//     return "Hi there!";
//   },
// };

// console.log(person);

// ==================================================================

// ==== Reading data in Objects

// 1. objectName.key

// === First level

// const data = person.name;

// console.log(data);

// 2. objectName["key"]

// const data = person["name"];
// console.log(data);

// === Second level (Nested Array)

// 3. objectName.key[indexNo.]

// const data = person.skills[2];
// console.log(data);

// 4. objectName.key[indexNo.][indexNo.]

// const data = person.skills[3][1];
// console.log(data);

// === Second level (Nested Objects)

// 5. objectName.key.key

// const data = person.parents.m;

// console.log(data);

// === Second level (Nested Function)

// objectName.key // To view the fuction

// const data = person.bio;
// console.log(data);

// objectName.key() // To invoke the function

// const data = person.bio();
// console.log(data);

// ==================================================================

// ==== Updating data in Objects

// === First level

// 1. objectName.key = data // can also add new data

// const person = {
//   name: "Subin Shakya",
//   phone: 1234567,
//   isMarried: true,
//   hasPet: undefined,
//   gender: null,
//   skills: ["HTML", "CSS", "JavaScript", ["Flexbox", "Grid System"]],
//   parents: {
//     f: "Shanta",
//     m: "Sulochana",
//   },
//   bio: () => {
//     return "Hi there!";
//   },
// };

// person.name = "Spike Snizzle";
// person.address = "Nayabazar";

// console.log(person);

// === Second level

// 2.objectName.objectName.key // updating object element inside object element

// person.parents.md = 2020;
// console.log(person);

// 3.objectName.arrayName.push() // updating array element inside object element

// person.skills.push("Typing");
// console.log(person);

// 4. objectName.arrayName[indexNo.].push() // updating array element inside object element

// person.skills[3].push("Typing");
// console.log(person);

// ==================================================================

// ==== Remove data in Objects

// const person = {
//   name: "Subin Shakya",
//   phone: 1234567,
//   isMarried: true,
//   hasPet: undefined,
//   gender: null,
//   skills: ["HTML", "CSS", "JavaScript", ["Flexbox", "Grid System"]],
//   parents: {
//     f: "Shanta",
//     m: "Sulochana",
//   },
//   bio: () => {
//     return "Hi there!";
//   },
// };

// === First level

// 1. delete objectName.key

// delete person.phone;
// console.log(person);

// 2. null, undefined

// objectName.key = null // deletes the data without removing property and memory block

// objectName.key = undefined // deletes the data without removing property and memory block but removes all when converted to JSON data

// === Second level

// 1. objectName.arrayName.pop() // deletes the last data inside array element

// person.skills.pop();
// console.log(person);

// 2. objectName.arrayName[index.no].pop() // deletes the last data inside nested array element

// person.skills[3].pop();
// console.log(person);

// 3.delete objectName.objectName.key // deletes data inside nested object

// delete person.parents.f;
// console.log(person);

// ==================================================================

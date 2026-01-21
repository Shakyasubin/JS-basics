// ==== Shallow VS Deep Copy ====

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

/// === Shallow Copy

// === Old Method
// Object.assign({}, objectName)

// === New Method
// { ...objectName}

/// Only the first level of data will be copied
/// Changes in the first level data will not be copied
/// Second level data will still be copied

// const p1 = person;
// const p1 = Object.assign({}, person);
// const p1 = { ...person };

// person.name = "Subin";
// person.parents.f = "Father";

// console.log(person);
// console.log(p1);

/// === Deep Copy

// const p1 = JSON.stringify(person); // converting object to string
// console.log(p1);

// const p2 = JSON.parse(JSON.stringify(person)); // converting string back to object
// console.log(p2);

// person.parents.f = "Father";

// console.log(person);
// console.log(p2);

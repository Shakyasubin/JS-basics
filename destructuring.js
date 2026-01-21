// ==== Destructuring ====

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

// === const {key} = objectName

// const { name, phone, parents } = person;

// console.log(name, phone, parents);
// console.log(parents.f);

// === Second level

// === const {objectName : {key}} = objectName // For nested object

// const {
//   parents: { f, m },
// } = person;
// console.log(f);

// ==================================================================

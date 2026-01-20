// ==== JS - Data Manipulation ====

// 1. {key:data}

const person = {
  name: "Subin Shakya",
  phone: 1234567,
  isMarried: true,
  hasPet: undefined,
  gender: null,
  skills: ["HTML", "CSS", "JavaScript", ["Flexbox", "Grid System"]],
  parents: {
    f: "Shanta",
    m: "Sulochana",
  },
  bio: () => {
    return "Hi there!";
  },
};

console.log(person);

// Reading data in objects

// 2. objectName.key

// === First level

// const data = person.name;

// console.log(data);

// 3. objectName["key"]

// const data = person["name"];
// console.log(data);

// === Second level (Nested Array)

// 4. objectName.key[indexNo.]

// const data = person.skills[2];
// console.log(data);

// 5. objectName.key[indexNo.][indexNo.]

// const data = person.skills[3][1];
// console.log(data);

// === Second level (Nested Objects)

// 6. objectName.key.key

// const data = person.parents.m;

// console.log(data);

// === Second level (Nested Function)

// objectName.key // To view the fuction

// const data = person.bio;
// console.log(data);

// objectName.key() // To invoke the function

const data = person.bio();
console.log(data);

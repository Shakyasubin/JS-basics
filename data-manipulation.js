// ==== JS - Data Manipulation ====

// 1. Number / 0 - 9
// === Safe number range (-2^53-1 to 2^53-1)
// const num = 138_943_754_380_342;
// console.log(num);

// const num = "123456";
// const num1 = "45aa";
// const num2 = "45aa.45a";
// const val = +num;

// == To extract number from string without decimals
// const val1 = parseInt(num1);

// == To extract number from string with decimals
// const val2 = parseFloat(num2);

// == To check if the value provided is not a number
// isNaN(val2);

// console.log(typeof num, num);
// console.log(typeof val, val);
// console.log(typeof val1, val1);
// console.log(typeof val2, val2);
// console.log(isNaN(val2));

// 2. String

// Concatination
// const str = "My name is Subin Shakya. " + "I live in Nayabazar";

// Finding character by Index No.
// const str = "Hi My name is Subin Shakya.";
// const val = str[6];
// console.log(val);

// Escape Character (\)
// const str = `Hi! I\'m is "Subin \\Shakya"`;

// Length
// const str = "Hi My name is Subin Shakya.";
// console.log(str.length);

// ===indexOf, lastIndexOf, search
// const str = "Hi My name is Subin Shakya.";
// const val = str.indexOf("a");
// const val = str.lastIndexOf("a");
// const val = str.search("o"); // returns (-1) if the provided value is not found
// console.log(val);

// ===slice, substring, substr(deprecated)
// slice(startingIndex, endingIndex)
// substring(startingIndex, endingIndex)

// const str = "Hi My name is Subin Shakya.";
// const val = str.slice(4); // can use (-number) to start counting from the last
// const val = str.slice(3, 5);
// const val = str.substring(3, 7);
// console.log(val);

// ===replace, replaceAll, concat, trim
// replace/replaceAll(valueto, valueas)
// trim() // removes spaces in front and back of the text
// concat(value) // adds new value to the string // ( + ) sign can also be used instead of concat

// const str = "Hi My name is Subin Shakya.";
// const val = str.replace("Subin", "Spike");
// const val1 = str.replaceAll("a", "u");
// const val = str.trim();
// const val = str.concat(" I live in Nayabazar.");
// const val = str + " I live in Nayabazar.";
// console.log(val);
// console.log(val1);

// ===toUpperCase, toLowerCase
// const str = "Hi My name is Subin Shakya.";
// const val = str.toLowerCase();
// const val = str.toUpperCase();
// console.log(val);

// ===charAt, [], split, join
// charAt(indexNo.)
// split(separator) // converts string into array // seperator wont be included in array
// join(value) // converts array to string separating each data by comma ( , ) if no value is provided
// const str = "Hi My name is Subin Shakya.";
// const val = str.charAt(20);
// const val = str[6];
// const val = str.split("i").join("a");
// console.log(val);

// ===includes
// const str = "Hi My name is Subin Shakya.";
// const val = str.includes("e");
// console.log(val);

// console.log(typeof str);
// console.log(str);

// Date challange : Create a function that takes a food and the expire data and retuns one of the followings:

// 1. if expired: AB is expired 4 days ago

// 2. if not expired: you have 10 days to use this product.

// Solution from Mentor

// const foods = [
//   { name: "Tuna", exp: "2026-1-20" },
//   {
//     name: "Milk",
//     exp: "2026-1-30",
//   },
// ];

// const milliSecPerDay = 24 * 60 * 60 * 1000;
// const checkExp = ({ name, exp }) => {
//   const today = Date.now();
//   const expTs = new Date(exp).getTime();

//   const diffDay = Math.floor((expTs - today) / milliSecPerDay);

//   if (diffDay < 1) {
//     return `${name} has expired ${Math.abs(diffDay)} days ago!`;
//   } else {
//     return `You have ${diffDay} to use the ${name}!`;
//   }
// };

// foods.map((food) => {
//   const result = checkExp(food);
//   console.log(result);
// });

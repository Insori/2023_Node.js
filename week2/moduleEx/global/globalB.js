const A = require("./globalA");

console.log(A());

global.message = "안녕하세요";
console.log(A());
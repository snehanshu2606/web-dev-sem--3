const isEven = require("./modules/isEven");
const logger = require("./modules/logger");

logger("Application started.");

const numbers = [2, 5, 8, 11, 14];

console.log("Checking numbers:");

numbers.forEach(function (number) {
    if (isEven(number)) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
});

logger("Application finished.");
const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log("Usage: node calculator.js <operation> <number1> <number2>");
    console.log("Operations: add, sub, mul, div");
    process.exit(1);
}

const operation = args[0];
const num1 = Number(args[1]);
const num2 = Number(args[2]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please enter valid numbers.");
    process.exit(1);
}

let result;

switch (operation) {
    case "add":
        result = num1 + num2;
        break;

    case "sub":
        result = num1 - num2;
        break;

    case "mul":
        result = num1 * num2;
        break;

    case "div":
        if (num2 === 0) {
            console.log("Cannot divide by zero.");
            process.exit(1);
        }
        result = num1 / num2;
        break;

    default:
        console.log("Invalid operation.");
        process.exit(1);
}

console.log("Result:", result);
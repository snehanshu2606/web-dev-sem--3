const crypto = require("crypto");

function rollDice() {
    return crypto.randomInt(1, 7);
}

console.log("Rolling Dice...");

const result = rollDice();

console.log("Dice Rolled:", result);

console.log("\nRolling dice 5 times:");

for (let i = 1; i <= 5; i++) {
    console.log("Roll " + i + ":", rollDice());
}
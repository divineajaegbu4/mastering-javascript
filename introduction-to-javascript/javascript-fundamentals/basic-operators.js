const expotentiation = 2 ** 3;

console.log("Exponential:", expotentiation); // 8

let numConcatenation = "1" + 3 + 3;

console.log("NumConcatenation:", numConcatenation); // "133"

numConcatenation = 1 + 3 + "3";

console.log("NumConcatenation:", numConcatenation); // "43"

console.log(typeof numConcatenation); // "string"

numConcatenation = 1 + "3" + 3;

console.log("NumConcatenation:", numConcatenation); // "133"

console.log(typeof numConcatenation);   // "string"

// Subtraction with strings

let numSubstraction = "10" - 1 - 2;

console.log("NumSubstraction:", numSubstraction); // "7"

numSubstraction = 10 - "1" - 2;

console.log("NumSubstraction:", numSubstraction); // "7"        

numSubstraction = 10 - 1 - "2";

console.log("NumSubstraction:", numSubstraction); // "7"

console.log(typeof numSubstraction); // "number"

// Multiplication with strings

let numMultiplication = "10" * 2 * 2;

console.log("NumMultiplication:", numMultiplication); // 40

numMultiplication = 10 * "2" * 2;

console.log("NumMultiplication:", numMultiplication); // 40

numMultiplication = 10 * 2 * "2";

console.log("NumMultiplication:", numMultiplication); // 40

console.log(typeof numMultiplication); // "number"

// Division with strings

let numDivision = "100" / 2 / 5;

console.log("NumDivision:", numDivision); // 10

numDivision = 100 / "2" / 5;

console.log("NumDivision:", numDivision); // 10

numDivision = 100 / 2 / "5";

console.log("NumDivision:", numDivision); // 10

console.log(typeof numDivision); // "number"

// Increment and Decrement

// console.log(5++)

// Increment no difference

let incrementY = 6

incrementY++ // postfix

console.log(incrementY)

++incrementY // prefix

console.log(incrementY);

// Increment difference

let i = 10;

console.log(i++) // postfix

console.log(++i) // prefix

console.log("----------------------------")

let y = 2;
console.log((2 ** 2) * y);
y++
console.log(y);

console.log("------------------------------------")

let count = 3;


console.log("count:", ++count); // 4

console.log("count:", count++); // 4

console.log(count) // 5

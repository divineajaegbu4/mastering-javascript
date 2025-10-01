// Type conversion of undefined

console.log(Number(undefined)); // NaN

// Type conversion of Boolean

console.log(Number(true)); // 1

console.log(Number(false)); // 0

// Type conversion of null

console.log(Number(null)); // 0

// Type conversion of String

console.log(Number("123")); // 123

console.log("Empty string:", Number("")); // 123, spaces are ignored

// tab space and newline are ignored
console.log("1\n23"); // 1
// 23

console.log("1\t23"); // 1      23

// Boolean Conversion

console.log(Boolean(" ")); // true

console.log(Boolean("")); // false

// Task

// 1. Convert "123" string to number and add 10

const str = "123";

const numConversion = Number(str) + 10;

console.log(numConversion); // 133

// 2. Convert true to number and boolean

const bool = true;

const boolToNum = Number(bool);

const boolToBool = Boolean(bool);

console.log("boolToNum:", boolToNum); // 1

console.log("boolToBool:", boolToBool); // true

console.log("TextConversion:", Number("Divine")); // NaN
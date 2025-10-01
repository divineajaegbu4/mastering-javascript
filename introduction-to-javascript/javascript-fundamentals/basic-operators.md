# Basic Operators, maths


## Terms: “unary”, “binary”, “operand”

- An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

- An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

```javascript

let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied
```

- An operator is binary if it has two operands. The same minus exists in binary form as well:

```javascript

let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values
```

## Remainder %

The remainder operator ``%``, despite its appearance, is not related to percents.

The result of ``a % b`` is the remainder of the integer division of a by b.

For instance:

```javascript

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4
```

NB: How to get remainder

```bash
Divide and get the integer part of the quotient.
5/2 = 2.5
Multiply the integer part of the quotient by the divisor.
.5 *2 = 
```

## Exponentiation **

The exponentiation operator a ** b raises a to the power of b.

In school maths, we write that as ab.

For instance:

```javascript

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16
```

Just like in maths, the exponentiation operator is defined for non-integer numbers as well.

For example, a square root is an exponentiation by ½:

```javascript

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)
```

## String concatenation with binary +

Usually, the plus operator + sums numbers.

But, if the binary + is applied to strings, it merges (concatenates) them:

```javascript

let s = "my" + "string";
alert(s); // mystring
```

Note that if any of the operands is a string, then the other one is converted to a string too.

For example:

```javascript

1. alert( '1' + 2 ); // "12"
2. alert( 2 + '1' ); // "21"
```

See, it doesn’t matter whether the first operand is a string or the second one.

Here’s a more complex example:

```javascript

alert(2 + 2 + '1' ); // "41" and not "221"
```

Here, operators work one after another. The first + sums two numbers, so it returns 4, then the next + adds the string 1 to it, so it’s like 4 + '1' = '41'.

``` javascript

alert('1' + 2 + 2); // "122" and not "14"
``` 

The summarization of the above example is as follows:

``` javascript

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
```


If we want to treat them as numbers, we need to convert and then sum them:

```javascript

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5
```

## Modify-in-place

```javascript

let n = 2;
n = n + 5;
n = n * 2;
```

This notation can be shortened using the operators += and *=:

```javascript

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14
```

Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.

Such operators have the same precedence as a normal assignment, so they run after most other calculations:

```javascript

let n = 2;

n *= 3 + 5; // right part evaluated first, same as n *= 8

alert( n ); // 16
```
## Increment/decrement


Increasing or decreasing a number by one is among the most common numerical operations.

So, there are special operators for it:

```javascript

let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3
```


Decrement -- decreases a variable by 1:

```javascript

let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1
```

⚠️ Important:

Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

The operators ++ and -- can be placed either before or after a variable.

- When the operator goes after the variable, it is in “postfix form”: counter++.
- The “prefix form” is when the operator goes before the variable: ++counter.

The operators ++ and -- can be placed either before or after a variable.

- When the operator goes after the variable, it is in “postfix form”: counter++.
- The “prefix form” is when the operator goes before the variable: ++counter.
The “prefix form” is when the operator goes before the variable: ++counter.
Both of these statements do the same thing: increase counter by 1.

Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.

Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

To see the difference, here’s an example:

```javascript

let counter = 1;
let a = ++counter; // (*)

alert(a); // 2
```

In the line (*), the prefix form ++counter increments counter and returns the new value, 2. So, the alert shows 2.


Now, let’s use the postfix form:

```javascript

let counter = 1;
let a = counter++; // (*) changed ++counter to counter++

alert(a); // 1
```


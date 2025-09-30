# BigInt

A BigInt value is created by appending n to the end of an integer:

```javascript
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

## In JavaScript, there are 3 types of quotes.

1. Double quotes: `"Hello"`.
2. Single quotes: `'Hello'`.
3. Backticks: `Hello`.

## The “undefined” value

Technically, it is possible to explicitly assign undefined to a variable:

```javascript
let age = 100;

// change the value to undefined
age = undefined;

alert(age); // "undefined"
```

…But we don’t recommend doing that. Normally, one uses **null** to assign an “empty” or “unknown” value to a variable, while **undefined** is reserved as a default initial value for unassigned things.

## The typeof operator

```javascript
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```
NB: 
The result of typeof null is "object". That’s an officially recognized error in typeof, coming from very early days of JavaScript and kept for compatibility. Definitely, null is not an object. It is a special value with a separate type of its own. The behavior of typeof is wrong here.

## The typeof(x) syntax

You may also come across another syntax: **typeof(x).** It’s the same as **typeof x**.

To put it clear: **typeof** is an operator, not a function. The parentheses here aren’t a part of typeof. It’s the kind of parentheses used for mathematical grouping.

Usually, such parentheses contain a mathematical expression, such as (2 + 2), but here they contain only one argument (x). Syntactically, they allow to avoid a space between the typeof operator and its argument, and some people like it.

Some people prefer typeof(x), although the typeof x syntax is much more common.

## 🔹 Primitive Types

A primitive type is a value that is:

- **Simple / basic** (not an object).

- **Immutable** → once created, it cannot be changed directly.

-  **Copied by value** → if you assign it to another variable, a new copy is made.
  

## ✅ Examples of primitive types in JavaScript:

1. **String** → "hello", 'A'

2. **Number** → 10, 3.14, -7

3. **Boolean** → true, false

4. **Undefined** → variable declared but not assigned.

5. **Null** → intentional “nothing” value.

6. **Symbol** → used for unique identifiers.

7. **BigInt** → very large integers, e.g. 123456789012345678901n.

## 🔹 Non-Primitive Types

A non-primitive type (also called reference type) is:

- **Complex / object-based.**

- **Mutable** → values inside can be changed.

- **Copied by reference** → if you assign it to another variable, they both point to the same object in memory.

## ✅ Examples of non-primitive types in JavaScript:

1. **Object** → { name: "John", age: 25 }

2. **Array** → [1, 2, 3]

3. **Function** → function greet() { ... }

4. **Date**, **RegExp**, **Map**, **Set**, etc. → all special built-in objects.

## 👉 Quick analogy:

- **Primitive** = like a note with a single word written on it.

- **Non-Primitive** = like a box that can hold many notes, or even other boxes.
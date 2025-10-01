# Type Conversion

For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers.

There are also cases when we need to explicitly convert a value to the expected type.

## String Conversion

```javascript
1. let value = true;
2. alert(typeof value); // boolean
3. value = String(value);
4. alert(typeof value); // string
```

## Numeric Conversion

```javascript
alert( "6" / "2" ); // 3, strings are converted to numbers
```     


We can use the Number(value) function to explicitly convert a value to a number:

```javascript
1. let str = "123";
2. alert(typeof str); // string

3. let num = Number(str); // becomes a number 123

4. alert(typeof num); // number
```

``` javascript

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
```

Explicit conversion is usually required when we read a value from a string-based source like a text form but expect a number to be entered.

If the string is not a valid number, the result of such a conversion is NaN. For instance:

```javascript
1. let age = Number("an arbitrary string instead of a number");

2. alert(age); // NaN, conversion failed
```

## Boolean Conversion

Boolean conversion is the simplest one.

It happens in logical operations (later we’ll meet condition tests and other similar things) but can also be performed explicitly with a call to Boolean(value).

The conversion rule:

Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.
For instance:

```javascript
1. alert( Boolean(1) ); // true
2. alert( Boolean(0) ); // false

3. alert( Boolean("hello") ); // true
4. alert( Boolean("") ); // false
```

NB: Please note: the string with zero "0" is true

```javascript
1. alert( Boolean("0") ); // true
2. alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)
```

NB: Most of these rules are easy to understand and memorize. The notable exceptions where people usually make mistakes are:

- undefined is NaN as a number, not 0.
- "0" and space-only strings like " " are true as a boolean.

``` javascript

// Boolean Conversion

console.log(Boolean(" ")); // true
console.log(Boolean("")); // false

```




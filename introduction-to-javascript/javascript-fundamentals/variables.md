# Reuse or create?

A **variable** is a “named storage” for data

And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones.

As a result, their variables are like boxes into which people throw different things without changing their stickers. What’s inside the box now? Who knows? We need to come closer and check.

Such programmers save a little bit on variable declaration but lose ten times more on debugging.

An extra variable is good, not evil.

Modern JavaScript minifiers and browsers optimize code well enough, so it won’t create performance issues. Using different variables for different values can even help the engine optimize your code.

## Some good-to-follow rules are:

- Use human-readable names like **userName** or **shoppingCart**.
  
- Stay away from abbreviations or short names like **a, b, and c**, unless you know what you’re doing.
  
- Make names maximally descriptive and concise. Examples of bad names are **data and value**. Such names say nothing. It’s only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.

- Agree on terms within your team and in your mind. If a site visitor is called a **“user”** then we should name related variables **currentUser or newUser**  instead of **currentVisitor or newManInTown.**

## Name things right

Talking about variables, there’s one more extremely important thing.

A variable name should have a clean, obvious meaning, describing the data that it stores.

Variable naming is one of the most important and complex skills in programming. A glance at variable names can reveal which code was written by a beginner versus an experienced developer.

Please spend time thinking about the right name for a variable before declaring it. Doing so will repay you handsomely.

## Uppercase constants

``` javascript
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```
In other words, capital-named constants are only used as aliases for “hard-coded” values.

## ✅ Key tips for naming variables

- Use camelCase for normal variables (userName, isLoggedIn).

- Use PascalCase for classes (UserProfile).

- Use UPPER_CASE for hard-coded constants (MAX_LIMIT).

- Make names meaningful, not just short.

Avoid abbreviations unless they are universally understood (e.g., URL, ID).
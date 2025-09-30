# Interaction: alert, prompt, confirm

## alert

This one we’ve seen already. It shows a message and waits for the user to press “OK”.

For example:

```javascript
alert('Hello, world!');
```

The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.

## prompt

The function prompt accepts two arguments:

```javascript
let age = prompt('How old are you?', 100);
``` 

It shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.

## confirm

```javascript
let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed
```

It shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.


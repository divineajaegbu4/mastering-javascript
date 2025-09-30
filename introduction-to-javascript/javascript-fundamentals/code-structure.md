````` javascipt
alert("Hello")[1, 2].forEach(alert);
`````


If we run this code, only the first Hello shows (and there’s an error, you may need to open the console to see it). There are no numbers any more. 

NB: That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code in the last example is treated as a single statement.

````` javascipt
alert("Hello");
[1, 2].forEach(alert);
`````
NB: Everything will work as supposed. the semicolon at the end of the first line is gone.
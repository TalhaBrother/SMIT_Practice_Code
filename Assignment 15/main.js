let a=prompt("Enter the name of any city");
let fChar=a.slice(0,1);
fChar=fChar.toUpperCase();
let lChar=a.slice(1);
lChar=lChar.toLowerCase();
let Caps=fChar+lChar;
alert("The city's name in capital will look like this\n"+Caps);

let month=prompt("Enter the name of any month");
abbrev=month.slice(0,3);
alert("The abbreviation of this month will be \n"+abbrev);

let str=prompt("Enter any string");
let lgt=str.length;
alert("The length of the given string is \n"+lgt);
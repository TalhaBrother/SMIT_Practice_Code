alert("Welcome to Time Formatter App!");
let a=prompt("Enter the time right now (in numerals)");
let b=Number(a);
let c=prompt("Is it day right now? (Y or N)");


if(c=="Y" || c=="y"){
    alert("Its daytime and the time is "+b+ "AM");
}
else if(c=="n" || c=="N"){
    alert("Its nighttime and the time is "+b+ "PM");
}
else{
    alert("Follow the instructions!");
}



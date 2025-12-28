alert("Welcome to Marksheet Maker");
let a=prompt("Please enter your GPA (Scale 1-4)");
let b=Number(a);
if(b<1){
    alert("You are failed!");
}
else if(b>1 && b<2){
    alert("You got C grade.")
}
else if(b>2 && b<3){
    alert("You got B grade.")
}
else if(b>3 && b<4){
    alert("You got A grade.")
}
else{
    alert("Please follow the instructions!")
}
alert("Thankyou for using my program.");
alert("Welcome to Number Guessing Game!");
let a=prompt("Guess the number stored in the memory!");
let b=Number(a);
let c=6;
for(let i=0; i<4; i++){
    if(b!=c){
        alert("Try again!");
        let a=prompt("Guess the number stored in the memory!");
        let b=Number(a);
    }
}
if(b==c){
    alert("You guessed it right!");
}
else("Follow the instructions above!");

alert("Welcome to Palindrome Check!");
let a=prompt("Please enter the word!");
let fchar=a.slice(0,1);
fchar=fchar.toUpperCase();
let lchar=a.slice(1);
lchar=lchar.toLowerCase();
for(j=0;j<a.length;j++){
    if(a.charAt(j)===' '){
        alert("There's a space in the word!");
    }
  
}
let b=a.split("").reverse().join("");
for(let i=0;i<=a.length;i++){
    if(a===b){
        alert("The given word is a palindrome!");
    }
    else{
        alert("This is not a palindrome!");
    }
}

// let a="talha";
// let b=a.split("").reverse().join("");
// alert(b);
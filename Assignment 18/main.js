alert("Welcome to Password Generator");
let alphaUp=["Q","S","E","W","X"];
let alphaLo=["m","f","g","b","j"];
let num=[3,5,2,6,8,9];
let spec=["#","@","$","&","*"];

function Pass(){
    let i=Number(prompt("Enter Any Number (1-5)"));
    fr=alphaUp[i];
    Sr=alphaLo[i];
    Tr=num[i];
    Lr=spec[i];
    password=fr+Sr+Tr+Lr;
    alert("Your Generated Password is: "+password);
}
Pass();

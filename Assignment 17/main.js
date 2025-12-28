alert("Welcome to Result Generator!");
let a=Number(prompt("Please Enter Your Roll No (1-4)"));
switch(a){
    case 1:
        alert("You got 3.5 GPA");
        break;
    case 2:
        alert("You got 3.3 GPA");
        break;
    case 3:
            alert("You got 3.0 GPA");
            break;  
    case 4:
            alert("You got 2.5 GPA");
            break;
    default:
        alert("Invalid Roll No!");
}
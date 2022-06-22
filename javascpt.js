 var firstNumber = prompt("Enter your first number")
 var secondNumber = prompt("Enter your second number")
 var Operator = prompt("Which operator will you like to perform? +, -, /, *")

if (Operator == "+"){
   alert("Your answer is " + (firstNumber + secondNumber));
} 
else if (Operator == "-"){
    alert("Your answer is " + (firstNumber - secondNumber));
} else if( Operator == "/"){
    alert("Your answer is " + (firstNumber / secondNumber));
}  else if (Operator == "*"){
    alert("Your answer is " + (firstNumber * secondNumber));
} else{
    alert("Invalid")
}

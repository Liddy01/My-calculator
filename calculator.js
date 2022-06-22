var numb1=parseInt(prompt("enter number: 0 to 9"))
var operator=prompt("enter operator: + , * , - , / , %")
var numb2=parseInt(prompt("enter number: 0 to 9" ))

if (operator=="+"){
    let result= numb1 + numb2;
    alert (numb1 + " " + operator + " " + numb2 + "=" + result);
}

else if (operator=="-"){
    let result= numb1 - numb2;
    alert (numb1 + " " + operator + " " + numb2 + "=" + result);
}

else if (operator=="/"){
    let result= numb1 / numb2;
    alert (numb1 + " " + operator + " " + numb2 + "=" + result);
}


else if (operator=="*"){
    let result= numb1 * numb2;
    alert (numb1 + " " + operator + " " + numb2 + "=" + result);
}


else if (operator=="%"){
    let result= numb1 % numb2;
    alert (numb1 + " " + operator + " " + numb2 + "=" + result);
}



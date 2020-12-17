//uppgift 1 
console.log("detta är uppgift 1");

//uppgift 2 

let hej = "hej på dig";
console.log(hej);

//uppgift 3

let heltal = 3; 
console.log(heltal); 

//uppgift 4 

let decimaltal = 4.5; 
console.log(decimaltal);

//uppgift 5-6

let divide = heltal/decimaltal;
console.log(divide);

//uppgift 7 

let myclass = "pu20h";
let myschool = "prakticum";
let medelande = "hej jag går på" + myclass + "i skolan" + myschool;
document.querySelector("#uppg7").innerHTML = medelande;

//uppgift 8 

document.querySelector("#uppg8").innerHTML = "divisionen är" + divide;


//uppgift 9 

let calculation = Math.ceil(3*4,765)/2;
document.querySelector("#uppg9").innerHTML = String(calculation);

//uppgift 10

function alert_open() {
        alert("vilken fin knapp!");
}

//uppgift 11

function alert_with_var_text() {
    alert(hej);
}




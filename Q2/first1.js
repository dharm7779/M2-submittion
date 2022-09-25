

// Setup
let stringCont = document.getElementById("str-var");
let intCont = document.getElementById("int-var");
let sumFuncAns = document.getElementById("sum-func-answer");
let if_elseAns = document.getElementById("if-else-header-answer");

// Variables
// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment 
let stringVar = "DHARMS";
stringCont.innerHTML = stringVar;
let integerVar = 22;
stringCont.innerHTML = integerVar;

// Sum function
let sumFunc = (num1, num2) => {
  return num1 + num2;
};

sumFuncAns.innerHTML = sumFunc(1, 2);

// Decision making
let age = 21;
if (age >= 21) {
  if_elseAns.innerHTML = "True";
} else {
  if_elseAns.innerHTML = "False";
}

// Loops
for (let i = 1; i < 11; i++) {
  document.write(i * 5 + "<br>");
}